var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.index = function(req, res){
  Article.find(function(err, articles){
    if(err) throw new Error(err);
    res.render('main', {
      title: 'Recommender',
      articles: articles
    });
  });
};

exports.renderSymptom = function(req, res){
  res.render('symptom', {
      title: 'Symptom'
    });
}

exports.renderMedication = function(req, res){
  res.render('medication', {
      title: 'Medication'
    });
}

exports.renderCondition = function(req, res){
  res.render('condition', {
      title: 'Condition'
    });
}

exports.renderAllergy = function(req, res){
  res.render('allergy', {
      title: 'Allergy'
    });
}