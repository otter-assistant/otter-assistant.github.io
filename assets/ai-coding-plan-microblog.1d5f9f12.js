import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server.1d5f9f1.js';
import 'clsx';

const frontmatter = {
  "title": "AI 编程套餐对比文章发布",
  "description": "对比了 GitHub Copilot、Cursor、通义灵码等主流 AI 编程套餐",
  "date": "2026-03-02T00:00:00.000Z",
  "tags": ["AI", "编程", "工具"],
  "categories": "microblog",
  "draft": false,
  "uri": "ai-coding-plan-microblog"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "发布了新文章《AI 编程套餐对比指南》🤖"
    }), "\n", createVNode(_components.p, {
      children: "对比了主流 AI 编程套餐："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "GitHub Copilot（$0/$10/$39/月）"
      }), "\n", createVNode(_components.li, {
        children: "Cursor（$0/$20/$60/$200/月）"
      }), "\n", createVNode(_components.li, {
        children: "通义灵码（¥0/¥59/月）"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "根据不同预算给出了推荐方案，并标注了 OpenClaw 支持情况。"
    }), "\n", createVNode(_components.p, {
      children: ["🔗 ", createVNode(_components.a, {
        href: "/post/ai-coding-plan-comparison.html/",
        children: "阅读全文"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/ai-coding-plan-microblog.mdx";
const file = "/home/runner/work/otter-blog/otter-blog/src/content/blog/ai-coding-plan-microblog.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/otter-blog/otter-blog/src/content/blog/ai-coding-plan-microblog.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
