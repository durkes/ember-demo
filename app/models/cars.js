import DS from 'ember-data';

var Cars = DS.Model.extend({
	name: DS.attr('string'),
	models: DS.attr(),
	isAdding: DS.attr('boolean')
});

Cars.reopenClass({
	FIXTURES: [
	{
		id: 1,
		name: 'BMW',
		models: [
			'M3',
			'3 Series',
			'X3',
			'Z4',
			'M5',
			'1 Series'
		]
	},
	{
		id: 2,
		name: 'Chevrolet',
		models: [
			'Camaro',
			'Volt',
			'Stingray',
			'Tahoe',
			'Corvette',
			'Chevelle'
		]
	},
	{
		id: 3,
		name: 'Ford',
		models: [
			'Mustang',
			'Fiesta',
			'Pinto',
			'Focus',
			'Explorer',
			'Fusion'
		]
	},
	{
		id: 4,
		name: 'Mercedes-Benz',
		models: [
			'300SL',
			'C-Class',
			'SLR McLaren',
			'S-Class',
			'SLS AMG',
			'M-Class'
		]
	},
	{
		id: 5,
		name: 'Nissan',
		models: [
			'GT-R',
			'Altima',
			'370Z',
			'Cube',
			'Rogue',
			'Versa'
		]
	},
	{
		id: 6,
		name: 'Toyota',
		models: [
			'Prius',
			'Tacoma',
			'Corolla',
			'Yaris',
			'Camry',
			'FJ Cruiser'
		]
	}
	]
});

export default Cars;