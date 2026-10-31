// tenses.js - Kho dữ liệu chi tiết và logic render tự động qua Class

const tensesDetailData = [
  {
    id: "1",
    greetings: "Welcome to the present simple practice",
    usage: "Present Simple is usually use for permanent truths, regular habits, and fixed schedules",
    firstUsage: "Permanent truths: Water boils at 100 degree Celsius.",
    secondUsage: "Regular habits: I walk to work every morning.",
    thirdUsage: "Fixed Schedules: The train leaves at 7:32 PM.",
    affirmativeForm: "(+): S + V(s/es) + ...",
    negativeForm: "(-): S + don't/doesn't + V + ...",
    questionForm: "(?): Do/Does + S + V + ...",
    remember: "Remember: the verb is infinitive form :D",
    importantThings: "add e/es after the verb if the subject is he/she/it",
    image: "./img/Screenshot_2026-10-10_214422-removebg-preview.png",
    firstQuestion: "1. Mark play football every day",
    firstAnswerOfFirstQuestion: "A. \"Mark\" turns to \"Marks\"",
    secondAnswerOfFirstQuestion: "B. \"play\" turns to \"plays\"",
    thirdAnswerOfFirstQuestion: "C. removes \"football\"",
    fourthAnswerOfFirstQuestion: "D. removes \"every day\"",
    secondQuestion: "2. They wash their hands every morning",
    firstAnswerOfSecondQuestion: "A. \"washes\" turns to \"wash\"",
    secondAnswerOfSecondQuestion: "B. \"hands\" turns to \"hand\"",
    thirdAnswerOfSecondQuestion: "C. removes typo",
    fourthAnswerOfSecondQuestion: "D. removes \"every morning\"",
    thirdQuestion: "3. The train is starts at 7 o'clock",
    firstAnswerOfThirdQuestion: "A. \"clock\" turns to \"clocks\"",
    secondAnswerOfThirdQuestion: "B. \"starts\" turns to \"start\"",
    thirdAnswerOfThirdQuestion: "C. removes \"7 o'clock\"",
    fourthAnswerOfThirdQuestion: "D. removes \"is\""
  },
  {
    id: "2",
    greetings: "Welcome to the present continuous practice",
    usage: "Present Continuous is used for actions happening right now or temporary situations",
    firstUsage: "Right now: She is reading a book at the moment.",
    secondUsage: "Temporary: I am staying with my friend this week.",
    thirdUsage: "Future plan: We are meeting them tomorrow.",
    affirmativeForm: "(+): S + am/is/are + V-ing + ...",
    negativeForm: "(-): S + am/is/are not + V-ing + ...",
    questionForm: "(?): Am/Is/Are + S + V-ing + ...",
    remember: "Remember: Don't forget 'to be' and '-ing'!",
    importantThings: "Double the last consonant for some short verbs (e.g., running)",
    image: "./img/peset cotinos.png",
    firstQuestion: "1. He is run in the park now",
    firstAnswerOfFirstQuestion: "A. \"He\" turns to \"They\"",
    secondAnswerOfFirstQuestion: "B. \"run\" turns to \"running\"",
    thirdAnswerOfFirstQuestion: "C. removes \"now\"",
    fourthAnswerOfFirstQuestion: "D. removes \"in the park\"",
    secondQuestion: "2. They are playing game at present",
    firstAnswerOfSecondQuestion: "A. \"playing\" turns to \"play\"",
    secondAnswerOfSecondQuestion: "B. \"are\" turns to \"is\"",
    thirdAnswerOfSecondQuestion: "C. removes \"game\"",
    fourthAnswerOfSecondQuestion: "D. keeps correct",
    thirdQuestion: "3. She am cooking dinner",
    firstAnswerOfThirdQuestion: "A. \"am\" turns to \"is\"",
    secondAnswerOfThirdQuestion: "B. \"cooking\" turns to \"cook\"",
    thirdAnswerOfThirdQuestion: "C. removes \"dinner\"",
    fourthAnswerOfThirdQuestion: "D. removes \"She\""
  },
  {
    id: "3",
    greetings: "Welcome to the past simple practice",
    usage: "Past Simple is used for completed actions in the past",
    firstUsage: "Completed action: I visited my grandparents last weekend.",
    secondUsage: "Past habit: When I was young, I played marbles.",
    thirdUsage: "Past series of events: I woke up, washed, and went out.",
    affirmativeForm: "(+): S + V-ed / V2 + ...",
    negativeForm: "(-): S + didn't + V + ...",
    questionForm: "(?): Did + S + V + ...",
    remember: "Remember: irregular verbs change form in V2!",
    importantThings: "Use 'did' for all subjects in questions and negatives",
    image: "./img/pat sipe.png",
    firstQuestion: "1. She go to school yesterday",
    firstAnswerOfFirstQuestion: "A. \"go\" turns to \"went\"",
    secondAnswerOfFirstQuestion: "B. \"yesterday\" turns to \"tomorrow\"",
    thirdAnswerOfFirstQuestion: "C. removes \"to school\"",
    fourthAnswerOfFirstQuestion: "D. removes \"She\"",
    secondQuestion: "2. They didn't played football last night",
    firstAnswerOfSecondQuestion: "A. \"played\" turns to \"play\"",
    secondAnswerOfSecondQuestion: "B. \"didn't\" turns to \"don't\"",
    thirdAnswerOfSecondQuestion: "C. removes \"football\"",
    fourthAnswerOfSecondQuestion: "D. removes \"last night\"",
    thirdQuestion: "3. Did you saw him last week?",
    firstAnswerOfThirdQuestion: "A. \"Did\" turns to \"Do\"",
    secondAnswerOfThirdQuestion: "B. \"saw\" turns to \"see\"",
    thirdAnswerOfThirdQuestion: "C. removes \"him\"",
    fourthAnswerOfThirdQuestion: "D. removes \"last week\""
  },
  {
    id: "4",
    greetings: "Welcome to the past continuous practice",
    usage: "Past Continuous is used for actions happening at a specific moment in the past",
    firstUsage: "Ongoing action at a time: I was reading at 8 PM yesterday.",
    secondUsage: "Interrupted action: I was sleeping when he came.",
    thirdUsage: "Parallel actions: While she was cooking, I was cleaning.",
    affirmativeForm: "(+): S + was/were + V-ing + ...",
    negativeForm: "(-): S + wasn't/weren't + V-ing + ...",
    questionForm: "(?): Was/Were + S + V-ing + ...",
    remember: "Remember: 'was' for I/he/she/it, 'were' for you/we/they",
    importantThings: "Often used with 'when' and 'while'",
    image: "./img/pat cotinos.png",
    firstQuestion: "1. I was watch TV at 9 PM yesterday",
    firstAnswerOfFirstQuestion: "A. \"was\" turns to \"were\"",
    secondAnswerOfFirstQuestion: "B. \"watch\" turns to \"watching\"",
    thirdAnswerOfFirstQuestion: "C. removes \"at 9 PM\"",
    fourthAnswerOfFirstQuestion: "D. removes \"yesterday\"",
    secondQuestion: "2. They was playing game when I arrived",
    firstAnswerOfSecondQuestion: "A. \"was\" turns to \"were\"",
    secondAnswerOfSecondQuestion: "B. \"playing\" turns to \"play\"",
    thirdAnswerOfSecondQuestion: "C. \"arrived\" turns to \"arrive\"",
    fourthAnswerOfSecondQuestion: "D. removes \"game\"",
    thirdQuestion: "3. What did you doing at that time?",
    firstAnswerOfThirdQuestion: "A. \"did\" turns to \"were\"",
    secondAnswerOfThirdQuestion: "B. \"doing\" turns to \"do\"",
    thirdAnswerOfThirdQuestion: "C. removes \"What\"",
    fourthAnswerOfThirdQuestion: "D. removes \"at that time\""
  },
  {
    id: "5",
    greetings: "Welcome to the future simple practice",
    usage: "Future Simple is used for spontaneous decisions, predictions, or promises",
    firstUsage: "Spontaneous decision: It's cold. I will close the window.",
    secondUsage: "Prediction: I think it will rain tomorrow.",
    thirdUsage: "Promise: I will help you with your homework.",
    affirmativeForm: "(+): S + will + V + ...",
    negativeForm: "(-): S + will not (won't) + V + ...",
    questionForm: "(?): Will + S + V + ...",
    remember: "Remember: 'will' is followed by a bare infinitive verb",
    importantThings: "Can use 'shall' with I/We in formal contexts",
    image: "./img/futre sipe.png",
    firstQuestion: "1. She will helps you tomorrow",
    firstAnswerOfFirstQuestion: "A. \"will\" turns to \"can\"",
    secondAnswerOfFirstQuestion: "B. \"helps\" turns to \"help\"",
    thirdAnswerOfFirstQuestion: "C. removes \"tomorrow\"",
    fourthAnswerOfFirstQuestion: "D. removes \"you\"",
    secondQuestion: "2. Will they comes to the party?",
    firstAnswerOfSecondQuestion: "A. \"comes\" turns to \"come\"",
    secondAnswerOfSecondQuestion: "B. \"Will\" turns to \"Do\"",
    thirdAnswerOfSecondQuestion: "C. removes \"to the party\"",
    fourthAnswerOfSecondQuestion: "D. removes \"they\"",
    thirdQuestion: "3. I won't meeting him next week",
    firstAnswerOfThirdQuestion: "A. \"won't\" turns to \"will\"",
    secondAnswerOfThirdQuestion: "B. \"meeting\" turns to \"meet\"",
    thirdAnswerOfThirdQuestion: "C. removes \"next week\"",
    fourthAnswerOfThirdQuestion: "D. removes \"him\""
  },
  {
    id: "6",
    greetings: "Welcome to the future continuous practice",
    usage: "Future Continuous is used for actions ongoing at a specific time in the future",
    firstUsage: "At a specific time: This time tomorrow, I will be flying to Japan.",
    secondUsage: "Interrupted future action: I will be sleeping when you arrive.",
    thirdUsage: "Planned routine: We will be meeting them next Monday.",
    affirmativeForm: "(+): S + will be + V-ing + ...",
    negativeForm: "(-): S + won't be + V-ing + ...",
    questionForm: "(?): Will + S + be + V-ing + ...",
    remember: "Remember: Structure includes both 'will be' and '-ing'",
    importantThings: "Emphasizes an ongoing state in times to come",
    image: "./img/futre cotinos.png",
    firstQuestion: "1. At 8 PM tonight, I will be study",
    firstAnswerOfFirstQuestion: "A. \"will be\" turns to \"will\"",
    secondAnswerOfFirstQuestion: "B. \"study\" turns to \"studying\"",
    thirdAnswerOfFirstQuestion: "C. removes \"At 8 PM\"",
    fourthAnswerOfFirstQuestion: "D. removes \"tonight\"",
    secondQuestion: "2. They will be playing tennis at this time tomorrow",
    firstAnswerOfSecondQuestion: "A. \"playing\" turns to \"play\"",
    secondAnswerOfSecondQuestion: "B. keeps correct",
    thirdAnswerOfSecondQuestion: "C. \"tomorrow\" turns to \"yesterday\"",
    fourthAnswerOfSecondQuestion: "D. removes \"tennis\"",
    thirdQuestion: "3. Will you be wait for me?",
    firstAnswerOfThirdQuestion: "A. \"wait\" turns to \"waiting\"",
    secondAnswerOfThirdQuestion: "B. \"Will\" turns to \"Do\"",
    thirdAnswerOfThirdQuestion: "C. removes \"for me\"",
    fourthAnswerOfThirdQuestion: "D. removes \"be\""
  },
  {
    id: "7",
    greetings: "Welcome to the present perfect practice",
    usage: "Present Perfect connects past actions with the present moment",
    firstUsage: "Life experience: I have visited Paris twice.",
    secondUsage: "Unfinished action: She has lived here for 5 years.",
    thirdUsage: "Recent completed action: I have just finished my homework.",
    affirmativeForm: "(+): S + have/has + V-ed/V3 + ...",
    negativeForm: "(-): S + haven't/hasn't + V-ed/V3 + ...",
    questionForm: "(?): Have/Has + S + V-ed/V3 + ...",
    remember: "Remember: 'have' for I/you/we/they, 'has' for he/she/it",
    importantThings: "Often used with 'just', 'already', 'yet', 'since', 'for'",
    image: "./img/peset pefet.png",
    firstQuestion: "1. She has wrote a letter",
    firstAnswerOfFirstQuestion: "A. \"has\" turns to \"have\"",
    secondAnswerOfFirstQuestion: "B. \"wrote\" turns to \"written\"",
    thirdAnswerOfFirstQuestion: "C. removes \"a letter\"",
    fourthAnswerOfFirstQuestion: "D. removes \"She\"",
    secondQuestion: "2. Have you ever be to London?",
    firstAnswerOfSecondQuestion: "A. \"be\" turns to \"been\"",
    secondAnswerOfSecondQuestion: "B. \"Have\" turns to \"Did\"",
    thirdAnswerOfSecondQuestion: "C. removes \"ever\"",
    fourthAnswerOfSecondQuestion: "D. removes \"to London\"",
    thirdQuestion: "3. They haven't finish the test yet",
    firstAnswerOfThirdQuestion: "A. \"finish\" turns to \"finished\"",
    secondAnswerOfThirdQuestion: "B. \"haven't\" turns to \"hasn't\"",
    thirdAnswerOfThirdQuestion: "C. removes \"yet\"",
    fourthAnswerOfThirdQuestion: "D. removes \"the test\""
  },
  {
    id: "8",
    greetings: "Welcome to the present perfect continuous practice",
    usage: "Present Perfect Continuous emphasizes the duration of an ongoing action",
    firstUsage: "Duration from past to now: I have been waiting for 2 hours.",
    secondUsage: "Recently stopped action: I am tired because I have been running.",
    thirdUsage: "Continuous habit: She has been learning English lately.",
    affirmativeForm: "(+): S + have/has + been + V-ing + ...",
    negativeForm: "(-): S + haven't/hasn't + been + V-ing + ...",
    questionForm: "(?): Have/Has + S + been + V-ing + ...",
    remember: "Remember: Combines 'have/has been' with '-ing'",
    importantThings: "Focuses more on 'how long' rather than the result",
    image: "./img/peset pefet cotinos.png",
    firstQuestion: "1. I have been work here for 3 years",
    firstAnswerOfFirstQuestion: "A. \"work\" turns to \"working\"",
    secondAnswerOfFirstQuestion: "B. \"have\" turns to \"has\"",
    thirdAnswerOfFirstQuestion: "C. removes \"for 3 years\"",
    fourthAnswerOfFirstQuestion: "D. removes \"I\"",
    secondQuestion: "2. Has it been rain all day?",
    firstAnswerOfSecondQuestion: "A. \"rain\" turns to \"raining\"",
    secondAnswerOfSecondQuestion: "B. \"Has\" turns to \"Have\"",
    thirdAnswerOfSecondQuestion: "C. removes \"all day\"",
    fourthAnswerOfSecondQuestion: "D. removes \"been\"",
    thirdQuestion: "3. She hasn't been sleeping well lately",
    firstAnswerOfThirdQuestion: "A. keeps correct",
    secondAnswerOfThirdQuestion: "B. \"sleeping\" turns to \"sleep\"",
    thirdAnswerOfThirdQuestion: "C. \"hasn't\" turns to \"haven't\"",
    fourthAnswerOfThirdQuestion: "D. removes \"lately\""
  },
  {
    id: "9",
    greetings: "Welcome to the past perfect practice",
    usage: "Past Perfect is used for an action completed before another in the past",
    firstUsage: "Before past action: I had eaten before he came.",
    secondUsage: "Before past time: She had left by 10 PM yesterday.",
    thirdUsage: "Past experience: It was the best movie I had ever seen.",
    affirmativeForm: "(+): S + had + V-ed/V3 + ...",
    negativeForm: "(-): S + hadn't + V-ed/V3 + ...",
    questionForm: "(?): Had + S + V-ed/V3 + ...",
    remember: "Remember: Uses 'had' for all subjects with past participle",
    importantThings: "Often used with 'before', 'after', 'by the time'",
    image: "./img/pat pefet.png",
    firstQuestion: "1. When I arrived, the train has left",
    firstAnswerOfFirstQuestion: "A. \"has\" turns to \"had\"",
    secondAnswerOfFirstQuestion: "B. \"left\" turns to \"leave\"",
    thirdAnswerOfFirstQuestion: "C. \"arrived\" turns to \"arrive\"",
    fourthAnswerOfFirstQuestion: "D. removes \"When\"",
    secondQuestion: "2. She had finish her homework before dinner",
    firstAnswerOfSecondQuestion: "A. \"finish\" turns to \"finished\"",
    secondAnswerOfSecondQuestion: "B. \"had\" turns to \"has\"",
    thirdAnswerOfSecondQuestion: "C. removes \"before dinner\"",
    fourthAnswerOfSecondQuestion: "D. removes \"her homework\"",
    thirdQuestion: "3. Had you ever saw him before that day?",
    firstAnswerOfThirdQuestion: "A. \"saw\" turns to \"seen\"",
    secondAnswerOfThirdQuestion: "B. \"Had\" turns to \"Did\"",
    thirdAnswerOfThirdQuestion: "C. removes \"before that day\"",
    fourthAnswerOfThirdQuestion: "D. removes \"ever\""
  },
  {
    id: "10",
    greetings: "Welcome to the past perfect continuous practice",
    usage: "Past Perfect Continuous emphasizes continuous duration before a past event",
    firstUsage: "Duration before past action: I had been working for hours before it rained.",
    secondUsage: "Cause of past result: He was tired because he had been running.",
    thirdUsage: "Long background action: They had been talking for an hour.",
    affirmativeForm: "(+): S + had + been + V-ing + ...",
    negativeForm: "(-): S + hadn't + been + V-ing + ...",
    questionForm: "(?): Had + S + been + V-ing + ...",
    remember: "Remember: Structure is 'had been + V-ing'",
    importantThings: "Shows ongoing duration leading up to a past moment",
    image: "./img/pat pefet cotinos.png",
    firstQuestion: "1. She had been wait for 2 hours when he came",
    firstAnswerOfFirstQuestion: "A. \"wait\" turns to \"waiting\"",
    secondAnswerOfFirstQuestion: "B. \"had\" turns to \"has\"",
    thirdAnswerOfFirstQuestion: "C. \"came\" turns to \"come\"",
    fourthAnswerOfFirstQuestion: "D. removes \"for 2 hours\"",
    secondQuestion: "2. They had been play football before it started to rain",
    firstAnswerOfSecondQuestion: "A. \"play\" turns to \"playing\"",
    secondAnswerOfSecondQuestion: "B. \"started\" turns to \"start\"",
    thirdAnswerOfSecondQuestion: "C. removes \"football\"",
    fourthAnswerOfSecondQuestion: "D. removes \"before\"",
    thirdQuestion: "3. Had you been study English long before moving?",
    firstAnswerOfThirdQuestion: "A. \"study\" turns to \"studying\"",
    secondAnswerOfThirdQuestion: "B. \"Had\" turns to \"Did\"",
    thirdAnswerOfThirdQuestion: "C. removes \"English\"",
    fourthAnswerOfThirdQuestion: "D. removes \"long\""
  },
  {
    id: "11",
    greetings: "Welcome to the future perfect practice",
    usage: "Future Perfect is used for actions completed before a future time",
    firstUsage: "Before future time: I will have finished my work by 5 PM.",
    secondUsage: "Duration up to a future point: By next year, I will have lived here for 10 years.",
    thirdUsage: "Certain prediction: They will have arrived by tomorrow morning.",
    affirmativeForm: "(+): S + will have + V-ed/V3 + ...",
    negativeForm: "(-): S + won't have + V-ed/V3 + ...",
    questionForm: "(?): Will + S + have + V-ed/V3 + ...",
    remember: "Remember: Uses 'will have' + past participle",
    importantThings: "Often triggered by phrases starting with 'By' or 'By the time'",
    image: "./img/futre pefet.png",
    firstQuestion: "1. By next month, she will have complete the course",
    firstAnswerOfFirstQuestion: "A. \"complete\" turns to \"completed\"",
    secondAnswerOfFirstQuestion: "B. \"will have\" turns to \"has\"",
    thirdAnswerOfFirstQuestion: "C. removes \"By next month\"",
    fourthAnswerOfFirstQuestion: "D. removes \"the course\"",
    secondQuestion: "2. Will you have finish by tomorrow?",
    firstAnswerOfSecondQuestion: "A. \"finish\" turns to \"finished\"",
    secondAnswerOfSecondQuestion: "B. \"Will\" turns to \"Do\"",
    thirdAnswerOfSecondQuestion: "C. removes \"by tomorrow\"",
    fourthAnswerOfSecondQuestion: "D. removes \"have\"",
    thirdQuestion: "3. They won't have wrote the report by then",
    firstAnswerOfThirdQuestion: "A. \"wrote\" turns to \"written\"",
    secondAnswerOfThirdQuestion: "B. \"won't\" turns to \"haven't\"",
    thirdAnswerOfThirdQuestion: "C. removes \"the report\"",
    fourthAnswerOfThirdQuestion: "D. removes \"by then\""
  },
  {
    id: "12",
    greetings: "Welcome to the future perfect continuous practice",
    usage: "Future Perfect Continuous emphasizes continuous duration up to a future point",
    firstUsage: "Continuous duration to future: By next year, I will have been working here for 5 years.",
    secondUsage: "Ongoing state until future milestone: By midnight, we will have been driving for 6 hours.",
    thirdUsage: "Extended future action focus: She will have been teaching for a decade.",
    affirmativeForm: "(+): S + will have been + V-ing + ...",
    negativeForm: "(-): S + won't have been + V-ing + ...",
    questionForm: "(?): Will + S + have been + V-ing + ...",
    remember: "Remember: Structure is 'will have been + V-ing'",
    importantThings: "Combines future perfect view with continuous duration",
    image: "./img/futre pefet cotinos.png",
    firstQuestion: "1. By next year, I will have been live here for 10 years",
    firstAnswerOfFirstQuestion: "A. \"live\" turns to \"living\"",
    secondAnswerOfFirstQuestion: "B. \"will\" turns to \"would\"",
    thirdAnswerOfFirstQuestion: "C. removes \"for 10 years\"",
    fourthAnswerOfFirstQuestion: "D. removes \"By next year\"",
    secondQuestion: "2. Will she have been work for 3 hours by 5 PM?",
    firstAnswerOfSecondQuestion: "A. \"work\" turns to \"working\"",
    secondAnswerOfSecondQuestion: "B. \"Will\" turns to \"Does\"",
    thirdAnswerOfSecondQuestion: "C. removes \"by 5 PM\"",
    fourthAnswerOfSecondQuestion: "D. removes \"been\"",
    thirdQuestion: "3. They won't have been playing game long",
    firstAnswerOfThirdQuestion: "A. \"game\" turns to \"games\"",
    secondAnswerOfThirdQuestion: "B. keeps correct",
    thirdAnswerOfThirdQuestion: "C. \"playing\" turns to \"play\"",
    fourthAnswerOfThirdQuestion: "D. removes \"long\""
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const tenseId = urlParams.get("id") || "1"; 

  // In ra Console (F12) để kiểm tra xem trình duyệt đang nhận id mấy
  console.log("ID hiện tại trên URL là:", tenseId);

  // Ép kiểu hoặc tìm kiếm linh hoạt hơn
  const currentTense = tensesDetailData.find(item => String(item.id) === String(tenseId));

  if (!currentTense) {
    console.error("Không tìm thấy dữ liệu cho ID:", tenseId);
    document.body.innerHTML = `<h2 style='text-align:center; margin-top:50px;'>Không tìm thấy bài học cho ID: ${tenseId}</h2>`;
    return;
  }

  // Hàm phụ trợ gán nội dung
  function setTextByClass(className, text) {
    const el = document.querySelector("." + className);
    if (el) {
      el.innerText = text || "";
    } else {
      console.warn("Không tìm thấy class trong HTML:", className);
    }
  }

  function setImgByClass(className, src) {
    const el = document.querySelector("." + className);
    if (el) {
      el.src = src || "";
    } else {
      console.warn("Không tìm thấy thẻ ảnh với class:", className);
    }
  }

  // --- PHẦN ĐỔ DỮ LIỆU ---
  setTextByClass("lesson-greetings", currentTense.greetings);
  setTextByClass("lesson-usage", currentTense.usage);
  setTextByClass("usage-1", currentTense.firstUsage);
  setTextByClass("usage-2", currentTense.secondUsage);
  setTextByClass("usage-3", currentTense.thirdUsage);
  
  setTextByClass("form-affirmative", currentTense.affirmativeForm);
  setTextByClass("form-negative", currentTense.negativeForm);
  setTextByClass("form-question", currentTense.questionForm);
  
  setTextByClass("note-remember", currentTense.remember);
  setTextByClass("note-important", currentTense.importantThings);
  setImgByClass("tense-img", currentTense.image);
  
  // Trắc nghiệm câu 1
  setTextByClass("q1-title", currentTense.firstQuestion);
  setTextByClass("q1-opt-a", currentTense.firstAnswerOfFirstQuestion);
  setTextByClass("q1-opt-b", currentTense.secondAnswerOfFirstQuestion);
  setTextByClass("q1-opt-c", currentTense.thirdAnswerOfFirstQuestion);
  setTextByClass("q1-opt-d", currentTense.fourthAnswerOfFirstQuestion);

  // Trắc nghiệm câu 2
  setTextByClass("q2-title", currentTense.secondQuestion);
  setTextByClass("q2-opt-a", currentTense.firstAnswerOfSecondQuestion);
  setTextByClass("q2-opt-b", currentTense.secondAnswerOfSecondQuestion);
  setTextByClass("q2-opt-c", currentTense.thirdAnswerOfSecondQuestion);
  setTextByClass("q2-opt-d", currentTense.fourthAnswerOfSecondQuestion);

  // Trắc nghiệm câu 3
  setTextByClass("q3-title", currentTense.thirdQuestion);
  setTextByClass("q3-opt-a", currentTense.firstAnswerOfThirdQuestion);
  setTextByClass("q3-opt-b", currentTense.secondAnswerOfThirdQuestion);
  setTextByClass("q3-opt-c", currentTense.thirdAnswerOfThirdQuestion);
  setTextByClass("q3-opt-d", currentTense.fourthAnswerOfThirdQuestion);
});
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const quizCardList = document.querySelectorAll(".quiz-card");

    quizCardList.forEach(card => {
      const buttons = card.querySelectorAll("button");

      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          buttons.forEach(b => b.classList.remove("selected"));
          
          btn.classList.add("selected");
        });
      });
    });
  }, 100); 
});