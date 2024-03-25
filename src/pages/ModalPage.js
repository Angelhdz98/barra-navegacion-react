import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";


function ModalPage() {
    const [showModal, setShowModal] = useState(false);
const handleClick = () =>{
    setShowModal(true);
}
const handleClose = () => {
    setShowModal(false);
}
const actionBar = <div> <Button onClick ={handleClose} primary> I Accept</Button>  </div>

const modal= ( <Modal onClose={handleClose} actionBar={actionBar}>
<p>
Here is an important agreement for you to accept 
</p>

</Modal>);
    return <div> 
        <Button onClick={handleClick} primary > Open Modal </Button>
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus placerat augue, ut elementum ligula tempor sit amet. Mauris venenatis justo vel quam pulvinar, quis molestie lorem vestibulum. Donec vitae erat quis turpis tincidunt ultricies. Curabitur nisl libero, finibus vel quam a, dignissim pretium risus. Etiam et libero quis dui pretium sagittis sit amet non lectus. Aliquam eu felis nec nibh mattis ullamcorper ut ut nibh. Vivamus pharetra pretium tristique. Fusce lacinia nisl vulputate lectus finibus, id interdum neque aliquet. Proin sit amet lectus ligula. Maecenas sed turpis magna. Nam scelerisque dolor eget felis tempus vehicula. Vivamus quis pharetra lacus, sed fringilla ipsum. Mauris varius ullamcorper enim sed ullamcorper. Suspendisse potenti. Nunc at nunc porta, imperdiet diam et, pharetra arcu. Vestibulum iaculis justo tempor rhoncus ullamcorper.

Pellentesque scelerisque, ante nec condimentum sodales, tortor sapien mollis lorem, ut dignissim tellus dolor vitae libero. Suspendisse potenti. Vivamus lorem quam, venenatis nec lacinia sit amet, ultrices a ante. Nullam eget diam ac massa commodo commodo tristique in libero. Nam scelerisque justo et nunc gravida viverra. Integer mattis nulla porttitor augue varius blandit. Curabitur sed ex at lacus placerat consequat sed at nibh. Sed dolor magna, sodales eget felis non, lobortis commodo dolor. Nullam gravida pellentesque finibus. Vestibulum feugiat tellus eu neque finibus condimentum. Ut rutrum gravida tellus, nec volutpat turpis tincidunt et. Quisque ex turpis, consequat vitae arcu eu, bibendum mollis nunc. Maecenas eget tortor ac lectus iaculis interdum vitae quis ligula.

Sed tempor nulla urna, a pretium mauris tempor nec. Vestibulum nec justo in nulla semper placerat. Nullam sit amet consectetur tortor. Donec id erat mauris. Etiam ut pharetra neque, at condimentum libero. In id pellentesque nisi. Vivamus at ipsum diam. Donec dolor ante, posuere sagittis egestas eget, pretium in augue. Phasellus malesuada massa nec nulla consequat gravida. In varius, mi ac rutrum dignissim, nisi metus efficitur mi, et posuere enim risus sit amet felis. Sed semper, risus nec fermentum aliquam, risus diam porttitor magna, ac tincidunt risus nibh ut ligula. Sed in felis non odio scelerisque pulvinar. Donec nunc eros, euismod at eleifend sit amet, suscipit scelerisque risus. Ut tincidunt dictum suscipit. Nam sit amet nibh ut tortor tempus malesuada.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus placerat augue, ut elementum ligula tempor sit amet. Mauris venenatis justo vel quam pulvinar, quis molestie lorem vestibulum. Donec vitae erat quis turpis tincidunt ultricies. Curabitur nisl libero, finibus vel quam a, dignissim pretium risus. Etiam et libero quis dui pretium sagittis sit amet non lectus. Aliquam eu felis nec nibh mattis ullamcorper ut ut nibh. Vivamus pharetra pretium tristique. Fusce lacinia nisl vulputate lectus finibus, id interdum neque aliquet. Proin sit amet lectus ligula. Maecenas sed turpis magna. Nam scelerisque dolor eget felis tempus vehicula. Vivamus quis pharetra lacus, sed fringilla ipsum. Mauris varius ullamcorper enim sed ullamcorper. Suspendisse potenti. Nunc at nunc porta, imperdiet diam et, pharetra arcu. Vestibulum iaculis justo tempor rhoncus ullamcorper.

Pellentesque scelerisque, ante nec condimentum sodales, tortor sapien mollis lorem, ut dignissim tellus dolor vitae libero. Suspendisse potenti. Vivamus lorem quam, venenatis nec lacinia sit amet, ultrices a ante. Nullam eget diam ac massa commodo commodo tristique in libero. Nam scelerisque justo et nunc gravida viverra. Integer mattis nulla porttitor augue varius blandit. Curabitur sed ex at lacus placerat consequat sed at nibh. Sed dolor magna, sodales eget felis non, lobortis commodo dolor. Nullam gravida pellentesque finibus. Vestibulum feugiat tellus eu neque finibus condimentum. Ut rutrum gravida tellus, nec volutpat turpis tincidunt et. Quisque ex turpis, consequat vitae arcu eu, bibendum mollis nunc. Maecenas eget tortor ac lectus iaculis interdum vitae quis ligula.

Sed tempor nulla urna, a pretium mauris tempor nec. Vestibulum nec justo in nulla semper placerat. Nullam sit amet consectetur tortor. Donec id erat mauris. Etiam ut pharetra neque, at condimentum libero. In id pellentesque nisi. Vivamus at ipsum diam. Donec dolor ante, posuere sagittis egestas eget, pretium in augue. Phasellus malesuada massa nec nulla consequat gravida. In varius, mi ac rutrum dignissim, nisi metus efficitur mi, et posuere enim risus sit amet felis. Sed semper, risus nec fermentum aliquam, risus diam porttitor magna, ac tincidunt risus nibh ut ligula. Sed in felis non odio scelerisque pulvinar. Donec nunc eros, euismod at eleifend sit amet, suscipit scelerisque risus. Ut tincidunt dictum suscipit. Nam sit amet nibh ut tortor tempus malesuada.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus placerat augue, ut elementum ligula tempor sit amet. Mauris venenatis justo vel quam pulvinar, quis molestie lorem vestibulum. Donec vitae erat quis turpis tincidunt ultricies. Curabitur nisl libero, finibus vel quam a, dignissim pretium risus. Etiam et libero quis dui pretium sagittis sit amet non lectus. Aliquam eu felis nec nibh mattis ullamcorper ut ut nibh. Vivamus pharetra pretium tristique. Fusce lacinia nisl vulputate lectus finibus, id interdum neque aliquet. Proin sit amet lectus ligula. Maecenas sed turpis magna. Nam scelerisque dolor eget felis tempus vehicula. Vivamus quis pharetra lacus, sed fringilla ipsum. Mauris varius ullamcorper enim sed ullamcorper. Suspendisse potenti. Nunc at nunc porta, imperdiet diam et, pharetra arcu. Vestibulum iaculis justo tempor rhoncus ullamcorper.

Pellentesque scelerisque, ante nec condimentum sodales, tortor sapien mollis lorem, ut dignissim tellus dolor vitae libero. Suspendisse potenti. Vivamus lorem quam, venenatis nec lacinia sit amet, ultrices a ante. Nullam eget diam ac massa commodo commodo tristique in libero. Nam scelerisque justo et nunc gravida viverra. Integer mattis nulla porttitor augue varius blandit. Curabitur sed ex at lacus placerat consequat sed at nibh. Sed dolor magna, sodales eget felis non, lobortis commodo dolor. Nullam gravida pellentesque finibus. Vestibulum feugiat tellus eu neque finibus condimentum. Ut rutrum gravida tellus, nec volutpat turpis tincidunt et. Quisque ex turpis, consequat vitae arcu eu, bibendum mollis nunc. Maecenas eget tortor ac lectus iaculis interdum vitae quis ligula.

Sed tempor nulla urna, a pretium mauris tempor nec. Vestibulum nec justo in nulla semper placerat. Nullam sit amet consectetur tortor. Donec id erat mauris. Etiam ut pharetra neque, at condimentum libero. In id pellentesque nisi. Vivamus at ipsum diam. Donec dolor ante, posuere sagittis egestas eget, pretium in augue. Phasellus malesuada massa nec nulla consequat gravida. In varius, mi ac rutrum dignissim, nisi metus efficitur mi, et posuere enim risus sit amet felis. Sed semper, risus nec fermentum aliquam, risus diam porttitor magna, ac tincidunt risus nibh ut ligula. Sed in felis non odio scelerisque pulvinar. Donec nunc eros, euismod at eleifend sit amet, suscipit scelerisque risus. Ut tincidunt dictum suscipit. Nam sit amet nibh ut tortor tempus malesuada.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus placerat augue, ut elementum ligula tempor sit amet. Mauris venenatis justo vel quam pulvinar, quis molestie lorem vestibulum. Donec vitae erat quis turpis tincidunt ultricies. Curabitur nisl libero, finibus vel quam a, dignissim pretium risus. Etiam et libero quis dui pretium sagittis sit amet non lectus. Aliquam eu felis nec nibh mattis ullamcorper ut ut nibh. Vivamus pharetra pretium tristique. Fusce lacinia nisl vulputate lectus finibus, id interdum neque aliquet. Proin sit amet lectus ligula. Maecenas sed turpis magna. Nam scelerisque dolor eget felis tempus vehicula. Vivamus quis pharetra lacus, sed fringilla ipsum. Mauris varius ullamcorper enim sed ullamcorper. Suspendisse potenti. Nunc at nunc porta, imperdiet diam et, pharetra arcu. Vestibulum iaculis justo tempor rhoncus ullamcorper.

Pellentesque scelerisque, ante nec condimentum sodales, tortor sapien mollis lorem, ut dignissim tellus dolor vitae libero. Suspendisse potenti. Vivamus lorem quam, venenatis nec lacinia sit amet, ultrices a ante. Nullam eget diam ac massa commodo commodo tristique in libero. Nam scelerisque justo et nunc gravida viverra. Integer mattis nulla porttitor augue varius blandit. Curabitur sed ex at lacus placerat consequat sed at nibh. Sed dolor magna, sodales eget felis non, lobortis commodo dolor. Nullam gravida pellentesque finibus. Vestibulum feugiat tellus eu neque finibus condimentum. Ut rutrum gravida tellus, nec volutpat turpis tincidunt et. Quisque ex turpis, consequat vitae arcu eu, bibendum mollis nunc. Maecenas eget tortor ac lectus iaculis interdum vitae quis ligula.

Sed tempor nulla urna, a pretium mauris tempor nec. Vestibulum nec justo in nulla semper placerat. Nullam sit amet consectetur tortor. Donec id erat mauris. Etiam ut pharetra neque, at condimentum libero. In id pellentesque nisi. Vivamus at ipsum diam. Donec dolor ante, posuere sagittis egestas eget, pretium in augue. Phasellus malesuada massa nec nulla consequat gravida. In varius, mi ac rutrum dignissim, nisi metus efficitur mi, et posuere enim risus sit amet felis. Sed semper, risus nec fermentum aliquam, risus diam porttitor magna, ac tincidunt risus nibh ut ligula. Sed in felis non odio scelerisque pulvinar. Donec nunc eros, euismod at eleifend sit amet, suscipit scelerisque risus. Ut tincidunt dictum suscipit. Nam sit amet nibh ut tortor tempus malesuada.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus placerat augue, ut elementum ligula tempor sit amet. Mauris venenatis justo vel quam pulvinar, quis molestie lorem vestibulum. Donec vitae erat quis turpis tincidunt ultricies. Curabitur nisl libero, finibus vel quam a, dignissim pretium risus. Etiam et libero quis dui pretium sagittis sit amet non lectus. Aliquam eu felis nec nibh mattis ullamcorper ut ut nibh. Vivamus pharetra pretium tristique. Fusce lacinia nisl vulputate lectus finibus, id interdum neque aliquet. Proin sit amet lectus ligula. Maecenas sed turpis magna. Nam scelerisque dolor eget felis tempus vehicula. Vivamus quis pharetra lacus, sed fringilla ipsum. Mauris varius ullamcorper enim sed ullamcorper. Suspendisse potenti. Nunc at nunc porta, imperdiet diam et, pharetra arcu. Vestibulum iaculis justo tempor rhoncus ullamcorper.

Pellentesque scelerisque, ante nec condimentum sodales, tortor sapien mollis lorem, ut dignissim tellus dolor vitae libero. Suspendisse potenti. Vivamus lorem quam, venenatis nec lacinia sit amet, ultrices a ante. Nullam eget diam ac massa commodo commodo tristique in libero. Nam scelerisque justo et nunc gravida viverra. Integer mattis nulla porttitor augue varius blandit. Curabitur sed ex at lacus placerat consequat sed at nibh. Sed dolor magna, sodales eget felis non, lobortis commodo dolor. Nullam gravida pellentesque finibus. Vestibulum feugiat tellus eu neque finibus condimentum. Ut rutrum gravida tellus, nec volutpat turpis tincidunt et. Quisque ex turpis, consequat vitae arcu eu, bibendum mollis nunc. Maecenas eget tortor ac lectus iaculis interdum vitae quis ligula.

Sed tempor nulla urna, a pretium mauris tempor nec. Vestibulum nec justo in nulla semper placerat. Nullam sit amet consectetur tortor. Donec id erat mauris. Etiam ut pharetra neque, at condimentum libero. In id pellentesque nisi. Vivamus at ipsum diam. Donec dolor ante, posuere sagittis egestas eget, pretium in augue. Phasellus malesuada massa nec nulla consequat gravida. In varius, mi ac rutrum dignissim, nisi metus efficitur mi, et posuere enim risus sit amet felis. Sed semper, risus nec fermentum aliquam, risus diam porttitor magna, ac tincidunt risus nibh ut ligula. Sed in felis non odio scelerisque pulvinar. Donec nunc eros, euismod at eleifend sit amet, suscipit scelerisque risus. Ut tincidunt dictum suscipit. Nam sit amet nibh ut tortor tempus malesuada.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus placerat augue, ut elementum ligula tempor sit amet. Mauris venenatis justo vel quam pulvinar, quis molestie lorem vestibulum. Donec vitae erat quis turpis tincidunt ultricies. Curabitur nisl libero, finibus vel quam a, dignissim pretium risus. Etiam et libero quis dui pretium sagittis sit amet non lectus. Aliquam eu felis nec nibh mattis ullamcorper ut ut nibh. Vivamus pharetra pretium tristique. Fusce lacinia nisl vulputate lectus finibus, id interdum neque aliquet. Proin sit amet lectus ligula. Maecenas sed turpis magna. Nam scelerisque dolor eget felis tempus vehicula. Vivamus quis pharetra lacus, sed fringilla ipsum. Mauris varius ullamcorper enim sed ullamcorper. Suspendisse potenti. Nunc at nunc porta, imperdiet diam et, pharetra arcu. Vestibulum iaculis justo tempor rhoncus ullamcorper.

Pellentesque scelerisque, ante nec condimentum sodales, tortor sapien mollis lorem, ut dignissim tellus dolor vitae libero. Suspendisse potenti. Vivamus lorem quam, venenatis nec lacinia sit amet, ultrices a ante. Nullam eget diam ac massa commodo commodo tristique in libero. Nam scelerisque justo et nunc gravida viverra. Integer mattis nulla porttitor augue varius blandit. Curabitur sed ex at lacus placerat consequat sed at nibh. Sed dolor magna, sodales eget felis non, lobortis commodo dolor. Nullam gravida pellentesque finibus. Vestibulum feugiat tellus eu neque finibus condimentum. Ut rutrum gravida tellus, nec volutpat turpis tincidunt et. Quisque ex turpis, consequat vitae arcu eu, bibendum mollis nunc. Maecenas eget tortor ac lectus iaculis interdum vitae quis ligula.

Sed tempor nulla urna, a pretium mauris tempor nec. Vestibulum nec justo in nulla semper placerat. Nullam sit amet consectetur tortor. Donec id erat mauris. Etiam ut pharetra neque, at condimentum libero. In id pellentesque nisi. Vivamus at ipsum diam. Donec dolor ante, posuere sagittis egestas eget, pretium in augue. Phasellus malesuada massa nec nulla consequat gravida. In varius, mi ac rutrum dignissim, nisi metus efficitur mi, et posuere enim risus sit amet felis. Sed semper, risus nec fermentum aliquam, risus diam porttitor magna, ac tincidunt risus nibh ut ligula. Sed in felis non odio scelerisque pulvinar. Donec nunc eros, euismod at eleifend sit amet, suscipit scelerisque risus. Ut tincidunt dictum suscipit. Nam sit amet nibh ut tortor tempus malesuada.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus placerat augue, ut elementum ligula tempor sit amet. Mauris venenatis justo vel quam pulvinar, quis molestie lorem vestibulum. Donec vitae erat quis turpis tincidunt ultricies. Curabitur nisl libero, finibus vel quam a, dignissim pretium risus. Etiam et libero quis dui pretium sagittis sit amet non lectus. Aliquam eu felis nec nibh mattis ullamcorper ut ut nibh. Vivamus pharetra pretium tristique. Fusce lacinia nisl vulputate lectus finibus, id interdum neque aliquet. Proin sit amet lectus ligula. Maecenas sed turpis magna. Nam scelerisque dolor eget felis tempus vehicula. Vivamus quis pharetra lacus, sed fringilla ipsum. Mauris varius ullamcorper enim sed ullamcorper. Suspendisse potenti. Nunc at nunc porta, imperdiet diam et, pharetra arcu. Vestibulum iaculis justo tempor rhoncus ullamcorper.

Pellentesque scelerisque, ante nec condimentum sodales, tortor sapien mollis lorem, ut dignissim tellus dolor vitae libero. Suspendisse potenti. Vivamus lorem quam, venenatis nec lacinia sit amet, ultrices a ante. Nullam eget diam ac massa commodo commodo tristique in libero. Nam scelerisque justo et nunc gravida viverra. Integer mattis nulla porttitor augue varius blandit. Curabitur sed ex at lacus placerat consequat sed at nibh. Sed dolor magna, sodales eget felis non, lobortis commodo dolor. Nullam gravida pellentesque finibus. Vestibulum feugiat tellus eu neque finibus condimentum. Ut rutrum gravida tellus, nec volutpat turpis tincidunt et. Quisque ex turpis, consequat vitae arcu eu, bibendum mollis nunc. Maecenas eget tortor ac lectus iaculis interdum vitae quis ligula.

Sed tempor nulla urna, a pretium mauris tempor nec. Vestibulum nec justo in nulla semper placerat. Nullam sit amet consectetur tortor. Donec id erat mauris. Etiam ut pharetra neque, at condimentum libero. In id pellentesque nisi. Vivamus at ipsum diam. Donec dolor ante, posuere sagittis egestas eget, pretium in augue. Phasellus malesuada massa nec nulla consequat gravida. In varius, mi ac rutrum dignissim, nisi metus efficitur mi, et posuere enim risus sit amet felis. Sed semper, risus nec fermentum aliquam, risus diam porttitor magna, ac tincidunt risus nibh ut ligula. Sed in felis non odio scelerisque pulvinar. Donec nunc eros, euismod at eleifend sit amet, suscipit scelerisque risus. Ut tincidunt dictum suscipit. Nam sit amet nibh ut tortor tempus malesuada.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus placerat augue, ut elementum ligula tempor sit amet. Mauris venenatis justo vel quam pulvinar, quis molestie lorem vestibulum. Donec vitae erat quis turpis tincidunt ultricies. Curabitur nisl libero, finibus vel quam a, dignissim pretium risus. Etiam et libero quis dui pretium sagittis sit amet non lectus. Aliquam eu felis nec nibh mattis ullamcorper ut ut nibh. Vivamus pharetra pretium tristique. Fusce lacinia nisl vulputate lectus finibus, id interdum neque aliquet. Proin sit amet lectus ligula. Maecenas sed turpis magna. Nam scelerisque dolor eget felis tempus vehicula. Vivamus quis pharetra lacus, sed fringilla ipsum. Mauris varius ullamcorper enim sed ullamcorper. Suspendisse potenti. Nunc at nunc porta, imperdiet diam et, pharetra arcu. Vestibulum iaculis justo tempor rhoncus ullamcorper.

Pellentesque scelerisque, ante nec condimentum sodales, tortor sapien mollis lorem, ut dignissim tellus dolor vitae libero. Suspendisse potenti. Vivamus lorem quam, venenatis nec lacinia sit amet, ultrices a ante. Nullam eget diam ac massa commodo commodo tristique in libero. Nam scelerisque justo et nunc gravida viverra. Integer mattis nulla porttitor augue varius blandit. Curabitur sed ex at lacus placerat consequat sed at nibh. Sed dolor magna, sodales eget felis non, lobortis commodo dolor. Nullam gravida pellentesque finibus. Vestibulum feugiat tellus eu neque finibus condimentum. Ut rutrum gravida tellus, nec volutpat turpis tincidunt et. Quisque ex turpis, consequat vitae arcu eu, bibendum mollis nunc. Maecenas eget tortor ac lectus iaculis interdum vitae quis ligula.

Sed tempor nulla urna, a pretium mauris tempor nec. Vestibulum nec justo in nulla semper placerat. Nullam sit amet consectetur tortor. Donec id erat mauris. Etiam ut pharetra neque, at condimentum libero. In id pellentesque nisi. Vivamus at ipsum diam. Donec dolor ante, posuere sagittis egestas eget, pretium in augue. Phasellus malesuada massa nec nulla consequat gravida. In varius, mi ac rutrum dignissim, nisi metus efficitur mi, et posuere enim risus sit amet felis. Sed semper, risus nec fermentum aliquam, risus diam porttitor magna, ac tincidunt risus nibh ut ligula. Sed in felis non odio scelerisque pulvinar. Donec nunc eros, euismod at eleifend sit amet, suscipit scelerisque risus. Ut tincidunt dictum suscipit. Nam sit amet nibh ut tortor tempus malesuada.</p>
        {showModal && modal}
        </div>

}


export default ModalPage