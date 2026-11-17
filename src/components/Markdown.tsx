/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Children,
  cloneElement,
  isValidElement,
  type ReactNode,
} from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { TableA11y } from "./TableA11y";
import { ZakahText } from "./ZakahTerm";

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    const props = (node as { props?: { children?: ReactNode } }).props;
    return textOf(props?.children);
  }
  return "";
}

/** Wrap every zakāh in a hoverable term, without disturbing the markdown tree. */
function withZakah(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (typeof child === "string") return <ZakahText text={child} />;
    if (!isValidElement<{ children?: ReactNode }>(child)) return child;
    if (child.type === "code" || child.type === "pre") return child;
    if (child.props.children === undefined) return child;
    return cloneElement(child, undefined, withZakah(child.props.children));
  });
}

export function Markdown({
  content,
  partIds = false,
  className = "",
}: {
  content: string;
  partIds?: boolean;
  className?: string;
}) {
  const components: Components = {
    p: ({ children, node: _node, ...props }) => <p {...props}>{withZakah(children)}</p>,
    li: ({ children, node: _node, ...props }) => <li {...props}>{withZakah(children)}</li>,
    td: ({ children, node: _node, ...props }) => <td {...props}>{withZakah(children)}</td>,
    th: ({ children, node: _node, ...props }) => (
      <th scope="col" {...props}>
        {withZakah(children)}
      </th>
    ),
    table: ({ children }) => (
      <div className="table-wrap">
        <table>{children}</table>
      </div>
    ),
    a: ({ href, children }) => {
      const external = href?.startsWith("http");
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
    h1: ({ children, node: _node, ...props }) => <h1 {...props}>{withZakah(children)}</h1>,
    h2: ({ children, node: _node, ...props }) => {
      const text = textOf(children);
      const part = partIds ? text.match(/^Part\s+(\d+)/) : null;
      const id = part
        ? `part-${part[1]}`
        : text.trim().toLowerCase() === "conclusion"
          ? "conclusion"
          : undefined;
      return (
        <h2 id={id} {...props}>
          {withZakah(children)}
        </h2>
      );
    },
    h3: ({ children, node: _node, ...props }) => <h3 {...props}>{withZakah(children)}</h3>,
    h4: ({ children, node: _node, ...props }) => <h4 {...props}>{withZakah(children)}</h4>,
  };

  return (
    <div className={`prose-quran ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={components}
      >
        {content}
      </ReactMarkdown>
      <TableA11y />
    </div>
  );
}
