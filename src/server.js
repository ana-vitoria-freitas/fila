const { verify } = require("./verifier")

const Queue = require("./queue")
var myQueue = new Queue();

const fastify = require('fastify')({
    logger: true
  })
  
  fastify.get('/consume', function (request, reply) {
    const event = myQueue.consume()
    event == false ? reply.status(406).send({ message: "Empty queue" }) : reply.status(200).send(event)
  })

  fastify.post('/publish', function (request, reply) {
    
    if(!verify(request.body)) return reply.status(400).send({ message: "Incorrect body" })
    
    myQueue.publish(request.body)
    return reply.status(200).send({message: "Event inserted in queue"})
  })

  fastify.delete('/remove', function (request, reply) {
    const successfulDelete = myQueue.remove()
    successfulDelete == false ? reply.status(406).send({ message: "Empty queue" }) : reply.status(200).send({ message: "Event successful removal" })
  })
  
  fastify.listen(process.env.PORT || 3000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })