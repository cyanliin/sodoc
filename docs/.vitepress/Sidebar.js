export default [
  {
    text: '頁面',
    collapsed: false,
    items: [
      {
        index: 'BK',
        text: '書籍管理',
        items: [
          {
            index: 'BK-01',
            text: '書籍列表',
            link: '/pages/BookManagement/BookList',
          },
          {
            index: 'BK-02',
            text: '新增/編輯書籍',
            link: '/pages/BookManagement/EditBook',
            items: [
              { 
                index: 'BK-02-01',
                text: '複製書籍',
                link: '/pages/BookManagement/DuplicateBook',
              },
              {
                index: 'BK-02-02',
                text: '刪除書籍',
                link: '/pages/BookManagement/DeleteBook',
              }
            ],
          },
        ],
      }
    ],
  },
  {
    text: '資料類型',
    collapsed: false,
    items: [
      { 
        label: 'type',
        text: 'Book',
        link: '/types/Book',
      },
      { 
        label: 'enum',
        text: 'BookStatus',
        link: '/enum/BookStatus',
      },
    ],
  },
  {
    text: 'API',
    collapsed: false,
    items: [
      { 
        label: 'get',
        text: '取得書籍目錄',
        link: '/api/GetBookList',
      },
    ],
  },
  {
    text: 'Markdown 範例',
    link: '/markdown-examples',
  },
]
