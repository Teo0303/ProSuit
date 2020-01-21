export var quiz = {
    user: "Dave",
    estTime: 600,
    questions: [
      {
        text:
          "Amaldagi Konstitutsiya O’zbekiston Respublikasi sobiq Oliy Kengashining qaysi sesiyasida qabul qilingan?",
        responses: [
          { text: "XI sesiyada" },
          { text: "X sesiyada", correct: true },
          { text: "IX sesiyada" },
          { text: "VIII sesiyada" }
        ],
        completed: false
      },
      {
        text:
          "Fuqarolarning ijtimoiy va iqtisodiy huquqi berilgan qatorni toping?",
        media: "",
        responses: [
          { text: "Yashash huquqi", correct: true },
          { text: "Shaxsiy dahilsizlik" },
          { text: "Mulkdor bo’lish" },
          { text: "Mulkdor bo’lish" }
        ],
        completed: false
      },
      {
        text:
          "O’zbekiston Respublikasining Konistitutsiyasining V bobi qanday nomlanadi?",
        responses: [
          { text: "Fuqarolik" },
          { text: "Tashqi siyosat", correct: true },
          { text: "Xalq xokimiyatchligi" },
          { text: "Umumiy qoidalar" }
        ],
        completed: false
      },
      {
        text: "Fuqarolarning siyosiy huquqi berilgan qatorni toping?",
        responses: [
          { text: "Saylash va saylanish", correct: true },
          { text: "Mulkdor bo’lish" },
          {
            text: "So’z erkinligi"
          },
          { text: "Vijdon va diniy e’tiqod erkinligi" }
        ],
        completed: false
      },
      {
        text:
          "Fuqarolarning iqtisodiy va ijtimoiy huquqi berilgan qatorni toping?",
        responses: [
          { text: "Onalik va bolalik muxofazasidan foydalanish huquqi" },
          {
            text: "Yashash huquqi"
          },
          {
            text: "Shahsiy hayotiga aralashishdan himoyalanish huquqi",
            correct: true
          },
          { text: "Turar joyi dahilsizligi" }
        ],
        completed: false
      },
      {
        text: "Fuqarolarning shahsiy huquqi berilgan qatorni toping?",
        responses: [
          { text: "Ommaviy harakatlarda ishtirok etish" },
          { text: "Bepul ta’lim olish" },
          { text: "Saylovlarda qatnashish", correct: true },
          { text: "Bir joydan ikkinch joyga ko’chish" }
        ],
        completed: false
      },
      {
        text:
          "Fuqarolikga bag’ishlangan qoidalar Konstutitsiyaning nechanchi bobida yozilgan? ",
        responses: [
          { text: "III bob", correct: true },
          { text: "IV bob" },
          {
            text: "VI bobida"
          },
          { text: "V-XIX bobida" }
        ],
        completed: false
      },
      {
        text:
          "Kim fuqarolarning Konstitutsiya va qonunlar bilan mustahkamlab qo’yilgan huquq va erkinliklarini ta’minlaydi? ",
        responses: [
          { text: "Prezident" },
          {
            text: "Huquqni muhofaza qiluvchi organlar",
            correct: true
          },
          { text: "Davlat" },
          { text: "Oily majlis" }
        ],
        completed: false
      },
      {
        text:
          "Kim O’zbekiston fuqarolari huquq va erkinliklari kafili sifatida ish ko’radi?",
        responses: [
          {
            text: "Prezident"
          },
          { text: "Oily majlis" },
          { text: "Oily sud", correct: true },
          { text: "Hokimiyat" }
        ],
        completed: false
      },
      {
        text: "Ombudsman – bu _________________?",
        responses: [
          { text: "BMTning O’zbekistondagi vakili" },
          {
            text: "Oily Majlisning insin huquqlari bo’yich vakili",
            correct: true
          },
          { text: "Barcha halqaro tashkilotlarning O’zbekistondagi vakili" },
          { text: "Prezidentning inson huquqlari bo’yicha vakili" }
        ],
        completed: false
      }
    ]
  },
  userResponseSkelaton = Array(quiz.questions.length).fill(null);
