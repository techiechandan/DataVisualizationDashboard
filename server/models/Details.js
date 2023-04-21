const mongoose = require('mongoose');

const Details = new mongoose.Schema({
    end_year:{
        type: 'string',
        isRequired: true,
    },
    intensity:{
        type: 'number',
        isRequired: true,
    },
    sector:{
        type: 'string',
        isRequired: true,
    },
    topic:{
        type: 'string',
        isRequired: true,
    },
    insight:{
        type: 'string',
        isRequired: true,
    },
    url:{
        type: 'string',
        isRequired: true,
    },
    region:{
        type: 'string',
        isRequired: true,
    },
    start_year:{
        type: 'string',
        isRequired: true,
    },
    impact:{
        type: 'string',
        isRequired: true,
    },
    added:{
        type: 'string',
        isRequired: true,
    },
    published:{
        type:'string',
    },
    country:{
        type: 'string',
        isRequired: true,
    },
    relevance:{
        type: 'number',
        isRequired: true,
    },
    pestle:{
        type: 'string',
        isRequired: true,
    },
    source:{
        type: 'string',
        isRequired: true,
    },
    title:{
        type: 'string',
        isRequired: true,
    },
    likelihood:{
        type: 'string',
        isRequired: true,
    }
});

module.exports = mongoose.model("Details",Details);