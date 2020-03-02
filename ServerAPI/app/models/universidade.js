/* models/universidade
 * Author: Diogo Araújo
 * Author: Diogo Nogueira
 * Author: Miguel Solans
 */

const mongoose = require('mongoose');

const universidadeSchema = new mongoose.Schema({
    CodInstit: {
        type: Number,
        required: true
    },
    NomeInstit: {
        type: String,
        required: true
    }
});

const Universidade = mongoose.model('universidades', universidadeSchema, 'universidades');

module.exports = Universidade;