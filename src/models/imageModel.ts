class ImageModel {
  public id: string
  public tile: string
  public description: string

  constructor (id: string, tile: string, description: string) {
    this.id = id
    this.tile = tile
    this.description = description
  }
}

export default ImageModel
