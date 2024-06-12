import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Alchemist: new ImageSource('images/alchemistwolamp.png'),
    Letter: new ImageSource('images/letter.png')
}
const ResourceLoader = new Loader([
    Resources.Alchemist,
    Resources.Letter
])

export { Resources, ResourceLoader }