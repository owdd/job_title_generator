var adjs = [
    'Principal',
    'Head',
    'Senior',
    'Chief',
    'Agile',
    'DevOps',
    'Release',
    'Lead',
    'Junior',
    'Former',
    'Global',
    'Dynamic',
    'Human',
    'Scaled',
    'Legacy'
];

var nounModifiers = [
    'Cloud',
    'DevOps',
    'Train',
    'Release',
    'Innovation',
    'Entrepreneurial',
    'Expansion',
    'Scalability',
    'Legacy',
    'Automation',
    'Application',
    'Software',
    'Infrastructure',
    'Network',
    'Optimization',
    'Quality',
    'Marketing'
];

var nouns = [
    'Architect',
    'Evangelist',
    'Specialist',
    'Ninja',
    'Pirate',
    'Engineer',
    'Technician',
    'Officer',
    'President',
    'Swashbuckler',
    'Prophet',
    'Entrepreneur',
    'Hacker',
    'Curator',
    'Researcher',
    'Scientist',
    'Jedi',
    'Button-pusher',
    'Mouse-clicker',
    'Bean Counter',
    'Agent',
    'Facilitator',
    'Manager',
    'Meeting Attender',
    'Intern',
    'President',
    'Assistant'
];

/**
 *  Returns a random integer between min (inclusive) and max (inclusive)
 *  Using Math.round() will give you a non-uniform distribution!
 **/
function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateJobTitle() {
    var index1 = getRandomInt(0, adjs.length - 1);
    var index2 = getRandomInt(0, nounModifiers.length - 1);
    var index3 = getRandomInt(0, nouns.length - 1);

    var adjective = adjs[index1];
    var nm = nounModifiers[index2];
    var noun = nouns[index3];

    return adjective + ' ' + nm + ' ' + noun;
};

function jerbMe() {
    var jobTitle = generateJobTitle(); 
    console.log('Setting job title to', jobTitle);
    $('#jerb').text( jobTitle );
}
