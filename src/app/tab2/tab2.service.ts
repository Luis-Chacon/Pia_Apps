
import { Injectable } from "@angular/core";
import { Estrenos } from "./tab2.model";

@Injectable({
    providedIn:'root'
})

export class PubilicidadServices
{
    constructor(){}

    private publicidad : Estrenos [] = 
    [
        {
            titulo : 'Fast And Furious 9',
            genero :'Action and Suspense',
            porpaganda :'When his younger brother, a dangerous criminal, shows up to hunt him down, Dom Toretto must rally his old team to stop him.',
            disponible : 'Available in all cinemas',
            imgUrl : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fast-furious-9-fotogramas-1618418035.jpg?resize=768:*',
            trailerUrl : 'https://www.youtube.com/embed/QJC2kxfZEfw',
            fecha : 'June 25, 2021 '
        },
        {
            titulo:'Venom Let There Be Carnage',
            genero:'Action and Fantasy',
            porpaganda:'Unknown plot. Venom movie sequel ',
            disponible : 'Available in all cinemas',
            imgUrl:'https://larepublica.pe/resizer/0rG_Pshv-zGkzjaDQZm_YX4uUUA=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/ANJCHLJ7ABCMPACEC2FA55RMWY.JPG',
            trailerUrl : 'https://www.youtube.com/embed/-ezfi6FQ8Ds',
            fecha:'September 17, 2021'
        },
        {
            titulo:'A Quiet Place 2',
            genero:'Fantasy, Horror and Suspense',
            porpaganda:'After the events at home, the Abbott family now faces the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats lurking beyond the sandy path.',
            disponible : 'Available in all cinemas',
            imgUrl:'https://cdn.lanetaneta.com/wp-content/uploads/2020/02/A-Quiet-Place-Part-II-gana-un-nuevo-póster-de.jpeg.webp',
            trailerUrl : 'https://www.youtube.com/embed/BpdDN9d9Jio',
            fecha:'May 31, 2021'
        }
    ];

    getAllEstrenos()
    {
        return[...this.publicidad];
    }
}
