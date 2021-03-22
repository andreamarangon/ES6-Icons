console.log('ok');
$(document).ready(function () {
  const icons = [
  	{
  		name: 'cat',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'crow',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'dog',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'dove',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'dragon',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'horse',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'hippo',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'fish',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'carrot',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'apple-alt',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'lemon',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'pepper-hot',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'user-astronaut',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	},
  	{
  		name: 'user-graduate',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	},
  	{
  		name: 'user-ninja',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	},
  	{
  		name: 'user-secret',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	}
  ];


  icons.forEach((item, i) => {
    const {name,prefix,type,family} = item;
    $('#icons').append(`<div class="card"><i class="${item.family} ${item.prefix}${item.name}"></i></div>`)
  });

  // const [{name,prefix,type,family}]= icons;
  console.log(icons);

});
