const factsList = document.getElementById('factsList');

function renderFacts(facts) {
    factsList.replaceChildren();

    facts.forEach((fact) => {
        const column = document.createElement('div');
        column.className = 'col-md-6 col-xl-4';

        const card = document.createElement('article');
        card.className = 'card project-card h-100';

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

        const title = document.createElement('h3');
        title.className = 'mb-2';
        title.textContent = fact.title || 'Untitled fact';
        card.append(title);

        const description = document.createElement('p');
        description.className = 'mb-3';
        description.textContent = fact.description || '';
        card.append(description);

        if (Array.isArray(fact.tags) && fact.tags.length) {
            const tags = document.createElement('div');
            tags.className = 'mb-2';
            fact.tags.forEach((tag) => {
                const badge = document.createElement('span');
                badge.className = 'tag-badge';
                badge.textContent = tag;
                tags.append(badge);
            });
            card.append(tags);
        }

        const links = Array.isArray(fact.links) ? fact.links : fact.Recipies;
        if (Array.isArray(links)) {
            links.filter((link) => link.url).forEach((link) => {
                const anchor = document.createElement('a');
                anchor.href = link.url;
                anchor.target = '_blank';
                anchor.rel = 'noreferrer';
                anchor.textContent = link.label || 'Related link';
                card.append(anchor);
            });
        }

        column.append(card);
        factsList.append(column);
    });
}

fetch(new URL('../../data/facts.json', document.currentScript.src))
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to load facts (${response.status})`);
        }
        return response.json();
    })
    .then((facts) => {
        if (!Array.isArray(facts)) {
            throw new Error('Facts data must be a list');
        }
        renderFacts(facts);
    })
    .catch(() => {
        factsList.textContent = 'Facts could not be loaded. Please try again later.';
    });