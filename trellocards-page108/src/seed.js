const boardList = [
  {
    id: "abc",
    title: "First try making a list",
    cards: [{
        title: "This is a card"
      },
      {
        title: "This is another card"
      },
      {
        title: "You can't say 'truco!' with this one"
      }
    ]
  },
  {
    id: "def",
    title: "Another card",
    cards: [{
        title: "LalalalalaLalalalalaLalalalala"
      },
      {
        title: "leleleleeeeeeeeeeeel"
      },
      {
        title: "asfafmañsfmasañsfmasfmlafms"
      }
    ]
  },
  {
    id: "agsgag",
    title: "Another card",
    cards: [{
        title: "LalalalalaLalalalalaLalalalala"
      },
      {
        title: "leleleleeeeeeeeeeeel"
      },
      {
        title: "asfafmañsfmasañsfmasfmlafms"
      }
    ]
  }
]

let idNumber = 0
boardList.map(cardList => (
  cardList.cards = cardList.cards.map((card) => {
        idNumber += 1
        return {
                  id: idNumber,
                  title: card.title,
                }
      }
    )
  )
)

export default boardList