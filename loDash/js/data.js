$.getJSON('https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json', {}, function(json){

  var str = JSON.stringify(json);
  var obj = JSON.parse(str);

  //SKILLS ARRAY
  var skills = _.uniq(_.flattenDeep(_.map(obj, 'skills')));
  skills = _.sortBy(skills);
  console.log(skills);

  //NAMES ARRAY
  var names = _.sortBy(obj, 'friends.length');
  names = _.map(names, 'name');
  console.log(names);

  //FRIENDS ARRAY
  var friends = _.flattenDeep(_.map(obj, 'friends'));
  friends = _.uniq(_.map(friends, 'name'));
  console.log(friends);

});
