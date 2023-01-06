const Aerospike = require('aerospike')

let client = Aerospike.client({
    hosts: [
        { addr: "aerospike2", port: 3000 },

    ],
    log: {
        level: Aerospike.log.INFO
    }
})


Aerospike.connect((error, client) => {
    if (error) throw error

    var del= "truncate:namespace=test;set=kitchen"

    var cmd = "namespaces"
    client.infoAny(cmd, (err, infoStr) => {
        if (err) {
            console.error('error retrieving info for cmd "%s": %s [%d]',
                cmd, err.message, err.code)
        } else {
            var info = Aerospike.info.parse(infoStr)
            console.log(info)
        }
        client.close()
    })
})
