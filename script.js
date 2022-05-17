import data from "./data.json" assert { type: "json" };

let counter = 0;

    for(let i=0; i < data.presentations.length; i++) {
    counter++;
    document.getElementById('container').innerHTML += `<div class="card card${counter}"><div class="title">${data.presentations[i].original_title}</div><a class="link link${counter}" target="_BLANK" href="${data.presentations[i].presentation_path}">Lien vers l'exposé</a><div><a href="${data.presentations[i].presentation_path}" class="save save${counter}">Save</a></div></div>`;
    };

$('.save').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    window.localStorage.setItem($(this).parent().parent().children().html(), $(this).attr('href'));
    document.getElementById('secondcontainer').innerHTML += `<div class="card"><div class='title'>${$(this).parent().parent().children().html()}</div><a target="_BLANK" href="${$(this).attr('href')}">Lien vers l'exposé</a><div class="remove">Remove</div></div>`
});

let links = 0;

if(localStorage.length > 0){
for(const element in localStorage){
        if(/^\p{Lu}/u.test(element)){
            document.getElementById('secondcontainer').innerHTML += `<div class="card"><div class='title'>${element}</div><a target="_BLANK" href="${localStorage[element]}">Lien vers l'exposé</a><div class="remove remove${links++}">Remove</div></div>`
        } else{
           
        }
    }
}

$('.remove').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).parent().remove();
    window.localStorage.removeItem($(this).parent().children().get(0).innerHTML);
    });
