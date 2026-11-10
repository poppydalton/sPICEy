# 🌶️ JULIETT Demo — PepTalk

## 0:00 — Problem

[30-second problem video](https://github.com/user-attachments/assets/a4156e57-8df3-48f4-92a6-ce226c47490f)


Explain how pepper information, Scoville heat ratings, and recipes are spread across multiple websites, making it difficult for home cooks to compare peppers and find useful information.

## 1:00 — User + Scenario

**Who is using this and why?**

Our target user is a home cook or pepper enthusiast who wants to explore unfamiliar peppers, understand their heat levels, and find recipes without searching multiple websites.

**Scenario:** A home cook wants to find a pepper for a recipe, compare its heat level with another pepper, and discover ways to use it.

## 1:30 — Live Product

[OPEN PEPTALK DEMO](https://github.com/poppydalton/sPICEy/edit/main/docs/juliett.md)

1. Open the PepTalk homepage.
2. Navigate to the pepper facts page.
3. Explore pepper information and pictures.
4. Open the pepper ranking page and compare Scoville heat levels.
5. Browse recipes featuring different peppers.
6. Show the results of the selected features.

[OPEN PEPTALK DEMO VIDEO](https://github.com/user-attachments/assets/417f3187-c4ef-41ec-a9f8-0d4ef7e84226)


## 5:00 — Behind the Curtain

[Show one meaningful system thread](https://github.com/poppydalton/sPICEy/blob/main/public/assets/js/facts.js)

Explain how the existing project code was updated and reused to create PepTalk.

```
if (fact.image) {
            const image = document.createElement('img');
            image.className = 'fact-image';
            image.src = fact.image;
            image.alt = fact.title ? `${fact.title} pepper` : 'Pepper';
            image.loading = 'lazy';
            card.append(image);

            if (fact.imageCredit && fact.imageCreditUrl) {
                const credit = document.createElement('a');
                credit.className = 'small mb-2';
                credit.href = fact.imageCreditUrl;
                credit.target = '_blank';
                credit.rel = 'noreferrer';
                credit.textContent = fact.imageCredit;
                card.append(credit);
            }
        }
```

[Open one useful code / Issue / PR link](https://github.com/poppydalton/sPICEy/issues/5)

- Show relevant HTML, CSS, or JavaScript.
- Show a GitHub Issue related to project development.

## 7:00 — Project Story

**What changed? What did you learn?**

- We started with an existing class project and updated its code to create PepTalk.
- We changed the original content, pages, and styling to focus on peppers.
- We learned how to reuse existing code and adapt it to a new project.
- We learned how to organize pepper facts, recipes, and heat ratings.
- We learned that there are not many websites dedicated specifically to bringing pepper facts, heat ratings, and recipes together in one place.

## 8:30 — What Comes Next?

- Improve and expand the pepper information collection.
- Add more recipes and reliable sources.
- Continue testing and improving the user experience.
- Use feedback to decide what should be changed before KILO.

## 9:30 — Questions

Capture feedback:
- 👍 Keep
- 🔧 Improve
- 🐛 Fix
- 💡 Consider
- 🗑️ Drop
