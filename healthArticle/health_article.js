let xhr = new XMLHttpRequest();
let url = './health_article.json';
// var url = 'https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/health.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    // xhr.status === 200 means that the request was successful
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let articles = xhr.response.articles;
            let articlesDiv = document.getElementById('articles');

            articles.forEach(function(article) {
                let articleDiv = document.createElement('div');
                articleDiv.classList.add('article');

                let title = document.createElement('h2');
                title.textContent = article.title;

                let description = document.createElement('p');
                description.textContent = article.description;

                let waysHeader = document.createElement('h3');
                waysHeader.textContent = 'Ways to Achieve:';

                let waysList = document.createElement('ul');
                article.ways_to_achieve.forEach(function(way) {
                    let listItem = document.createElement('li');
                    listItem.textContent = way;
                    waysList.appendChild(listItem);
                });

                let benefitsHeader = document.createElement('h3');
                benefitsHeader.textContent = 'Benefits:';

                let benefitsList = document.createElement('ul');
                article.benefits.forEach(function(benefit) {
                    let listItem = document.createElement('li');
                    listItem.textContent = benefit;
                    benefitsList.appendChild(listItem);
                });

                articleDiv.appendChild(title);
                articleDiv.appendChild(description);
                articleDiv.appendChild(waysHeader);
                articleDiv.appendChild(waysList);
                articleDiv.appendChild(benefitsHeader);
                articleDiv.appendChild(benefitsList);

                articlesDiv.appendChild(articleDiv);
            })
        }
    }

}

xhr.send();