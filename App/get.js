const Aerospike = require('aerospike')


let client = Aerospike.client({
    hosts: [
        { addr: "aerospike2", port: 3000 },

    ],
    log: {
        level: Aerospike.log.INFO
    }
})





const key = new Aerospike.Key('test', 'users', 'taylorgraham')
Aerospike.connect(function (error, client) {
    if (error) throw error
    client.get(key, function (error, record) {
        if (error) {
            switch (error.code) {
                case Aerospike.status.AEROSPIKE_ERR_RECORD_NOT_FOUND:
                    console.log('NOT_FOUND -', key)
                    break
                default:
                    console.log('ERR - ', error, key)
            }
        } else {
            console.log('OK - ', record)
        }
        client.close()
    })
})
