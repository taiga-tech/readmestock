import MarkdownIt from 'markdown-it'
import uslug from 'uslug'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItTable from 'markdown-it-table-of-contents'
import markdwonItAttr from 'markdown-it-link-attributes'
import taskLists from 'markdown-it-task-lists'
const uslugify = (s) => uslug(s)

export default ({ app }, inject) => {
  const md = new MarkdownIt({
    langPrefix: 'language-',
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードに変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true, // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
  })

  // md.use(require('markdown-it-sup'))
  // md.use(require('markdown-it-footnote'))

  md.use(markdownItAnchor, {
    level: [2, 3, 4],
    slugify: uslugify,
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: 'before',
      symbol:
        '<svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>',
    }),
  })
  inject('md', md)

  md.use(markdownItTable, {
    slugify: uslugify,
    includeLevel: [2, 3, 4],
    containerHeaderHtml:
      '<div class="v-card__title">目次<div class="spacer"></div> <i aria-hidden="true" id="toggleToc" class="v-icon notranslate mdi mdi-chevron-down theme--dark"></i></div>',
  })

  md.use(markdwonItAttr, {
    attrs: {
      target: '_blank',
      rel: 'noopener',
    },
  })

  md.use(taskLists, { enabled: true })
}
