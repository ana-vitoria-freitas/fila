const { verify } = require("./verifier")

const Queue = require("./queue")
var myQueue = new Queue();

const fastify = require('fastify')({
    logger: true
  })
  
  fastify.get('/consume', function (request, reply) {
    reply.send(myQueue.consume())
  })

  fastify.post('/publish', function (request, reply) {
    
    if(!verify(request.body)) return reply.send({ status: 'Not OK' })
    
    myQueue.publish(request.body)
    return reply.send({status: "OK"})
  })

  fastify.delete('/remove', function (request, reply) {
    reply.send(myQueue.remove())
  })
  
  fastify.listen(process.env.PORT || 3000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })