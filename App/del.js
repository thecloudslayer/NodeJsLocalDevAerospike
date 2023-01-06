const Aerospike = require('aerospike')

let client = Aerospike.client({
    hosts: [
        { addr: "127.0.0.1", port: 3000 }
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


// Delete the record using the key k1
        client.remove(key, function (error) {
            if (error) {
                console.log("error %s", error.message)
            }
        })

        console.log('Connection to Aerospike cluster succeeded!')
        console.log(key," deleted")

    }
    client.close()
})




