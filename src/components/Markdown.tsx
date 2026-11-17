/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { TableA11y } from "./TableA11y";

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    const props = (node as { props?: { children?: ReactNode } }).props;
    return textOf(props?.children);
  }
  return "";
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
    table: ({ children }) => (
      <div className="table-wrap">
        <table>{children}</table>
      </div>
    ),
    th: ({ children, node: _node, ...props }) => (
      <th scope="col" {...props}>
        {children}
      </th>
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
    h2: ({ children, node: _node, ...props }) => {
      const text = textOf(children);
      const part = partIds ? text.match(/^Part\s+(\d+)/) : null;
      const id = part ? `part-${part[1]}` : text.trim().toLowerCase() === "conclusion" ? "conclusion" : undefined;
      return (
        <h2 id={id} {...props}>
          {children}
        </h2>
      );
    },
    h1: ({ children, node: _node, ...props }) => <h1 {...props}>{children}</h1>,
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
