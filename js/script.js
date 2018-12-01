'use strict';
(function(){ 

    var data = [
        {
            id: 'box1',
            title: 'First box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'special-header', 'important']
        },
        {
            id: 'box2',
            title: 'Second box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['special-header', 'important']
        },
        {
            id: 'box3',
            title: 'Third box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'important']
        },
        {
            id: 'box4',
            title: 'Fourth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted']
        },
        {
            id: 'box5',
            title: 'Fifth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: []
        },
    ];

    var addBoxes = function(data) {
        for (var i in data) {
            // Create div
            var newDiv = document.createElement('div');

            // Add id
            newDiv.id = data[i].id;

            // Add classes
            for (var j in data[i].categories) {
                newDiv.classList.add(data[i].categories[j]);
            }

            // Create header and add title
            var newDivHeader = document.createElement('h3');
            newDivHeader.innerText = data[i].title;

            // Create paragraph and add content
            var newDivParagraph = document.createElement('p');
            newDivParagraph.innerText = data[i].content.slice(3, -4);

            // Append elements to the document
            document.body.appendChild(newDiv);
            newDiv.appendChild(newDivHeader);
            newDiv.appendChild(newDivParagraph);
        }
    }

    addBoxes(data);
})();    