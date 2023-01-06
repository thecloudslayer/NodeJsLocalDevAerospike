const Aerospike = require('aerospike')

let client = Aerospike.client({
    hosts: [
        { addr: "localhost", port:3000 },


    ],
    log: {
        level: Aerospike.log.INFO
    }
})



client.connect(function (error) {
    if (error) {
        // handle failure
        console.log('Connection to Aerospike cluster failed!')
    } else {
        // handle success



        const key = new Aerospike.Key('test', 'users', 'taylorgraham')

// Record to be written to the database
        let bins = {
            uid:     1000,                // integer data stored in bin called "uid"
            name:    'Taylor Graham',         // string data stored in bin called "user_name"
            dob:     { mm:8, dd: 1, yy: 1983},  // map data stored (msgpack format) in bin called "dob"
            friends: [1001, 1002, 1003],  // list data stored (msgpack format) in bin called "friends"

        }


        let JsonBin = {"name":"Taylor", "age":39, "car":"Jeep","awesome":true, "meaningOfLife":null}

        client.put(key, JsonBin, function (error) {
            if (error) {
                console.log('error: %s', error.message)
            } else {
                console.log('Record written to database successfully.')

            }
            client.close()
          })
    }

})


/*

const key = new Aerospike.Key('test', 'demo', 'demo')
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
})*/
