class ImageModel {
  public id?: string
  public title: string
  public description: string
  public image?: string

  constructor (id: string, title: string, description: string, image?: string) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
  }
}

export default ImageModel
