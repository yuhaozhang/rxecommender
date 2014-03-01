var home = require('../app/controllers/home'),
    symptom = require('../app/controllers/symptom');

module.exports = function(app){

	//home route
	app.get('/', home.index);
  app.get('/symptom', home.renderSymptom);
  app.get('/medication', home.renderMedication);
  app.get('/condition', home.renderCondition);
  app.get('/allergy', home.renderAllergy);
};
