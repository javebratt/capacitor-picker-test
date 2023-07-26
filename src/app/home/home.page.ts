import { Component } from '@angular/core';
import { Camera, CameraPluginPermissions, GalleryPhotos } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  pickPhoto = async () => {
    let images: GalleryPhotos;

    const permissions = await Camera.requestPermissions({
      permissions: ['photos']
    });

    if (permissions.photos === 'granted') {
      images = await Camera.pickImages({
        quality: 100,
      });
    } else {
      // NOTE: This works, but when it opens the picker it shows ALL the images
      // instead of only the ones the user gave permission too.

      // images = await Camera.pickImages({
      //   quality: 100,
      // });

      // NOTE: This one opens the picker to allow the user to select different
      // pictures for permission perspective, not for the app to use.
      images = await Camera.pickLimitedLibraryPhotos();

      // NOTE: This one just gives you all the pictures the user already gave
      // access to without opening the picker.
      images = await Camera.getLimitedLibraryPhotos();
    }

    console.log(images)
  };

}
