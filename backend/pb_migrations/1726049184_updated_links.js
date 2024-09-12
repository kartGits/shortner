/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mhkd8mo9zcomchu")

  collection.updateRule = "@request.auth.id = createdBy"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mhkd8mo9zcomchu")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
