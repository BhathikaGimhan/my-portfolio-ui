import { faAngular, faBootstrap, faCss3,  faFigma, faHtml5, faJava, faJs, faLaravel, faLinux, faNode, faPhp, faReact, faReacteurope } from '@fortawesome/free-brands-svg-icons'
import { faAtom, faC, faDatabase, faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Skill = () => {
  return (
    <React.Fragment>
        <div className="main-body">
            <div className="body">
                <div className="section-name">Skills</div>
                <div className="container">
                    <h1 className='heading'>My <samp className='main-color'>Advantages</samp></h1><br />
                    <div className="skill-section gap-5">
                        <div className="skill-card">
                            <div className="skill-heading">React</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faReact} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">Angular</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faAngular} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">Laravel</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faLaravel} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">PHP</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faPhp} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">Electron</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faAtom} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">C Sharp</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faC} /><FontAwesomeIcon icon={faHashtag} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">HTML</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faHtml5} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">CSS</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faCss3} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">JavaScript</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faJs} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">Java</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faJava} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">Node Js</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faNode} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">Tailwind</div>
                            <div className="skill-body"><svg preserveAspectRatio="xMidYMid" width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153.6"><linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%"><stop offset="0" stop-color="#2298bd"/><stop offset="1" stop-color="#0ed7b5"/></linearGradient><path fill="#fff" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" /></svg></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">Bootstrap</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faBootstrap} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">Figma</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faFigma} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">Reat Native</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faReacteurope} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">Linux</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faLinux} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">MySQL</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faDatabase} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">Mongo DB</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faDatabase} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">Firebase</div>
                            <div className="skill-body"><FontAwesomeIcon icon={faDatabase} /></div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-heading">jQuery</div>
                            <div className="skill-body"><svg xmlns="http://www.w3.org/2000/svg"  width="100px" viewBox="-78.5394 -32.0625 680.6748 192.375"><path d="M223.9 46.171l.001-.005-3.352 11.88 3.35-11.875zm17.24 25.791l-3.694-.022 3.694.022zm-.95 17.741h.004l-22.131.08 22.128-.08zm4.64-17.719l-3.695-.022 3.695.022zm-2.7 16.211l3.855-14.702-3.855 14.705v-.002zm81.48-67.705l-7.181 33.76 7.181-33.76zm-18.46 0l-5.452 25.22 5.452-25.222z" fill="#fff"/><path d="M322.38 18.971h-15.356c-.852 0-1.698.684-1.88 1.516l-5.452 25.222-5.451 25.222c-.18.833-1.026 1.514-1.878 1.514h-10.869c-10.753 0-9.509-7.437-7.307-17.627l.066-.308.242-1.284c.014-.083.031-.166.045-.242l.49-2.615.527-2.802c.16-.845.403-2.08.561-2.857l2.478-12.109 2.48-12.109c.172-.835-.387-1.52-1.24-1.52h-15.761c-.853 0-1.696.685-1.87 1.518l-3.39 16.079-3.388 16.077c-.003.007-.004.017-.005.024l-.315 1.495c-3.904 17.822-2.868 34.817 18.347 35.349.347.01.615.012.615.012h33.302c.852 0 1.696-.684 1.874-1.519l7.182-33.757 7.181-33.76c.177-.834-.376-1.518-1.228-1.518zm61.26 53.65c.853 0 1.411.684 1.24 1.519l-1.491 7.287m-1.489 7.292l1.49-7.293-1.491 7.295v-.002zm-1.87 1.534l.007-.002c-4.519.037-18.099.14-28.306.14 12.422 0 28.298-.138 28.298-.138zm-37.46-27.019c-.013-.798.896-2.173 1.75-2.173l-1.918-.032c-.865 8.692.168 2.205.168 2.205z" fill="#fff"/><path d="M353.13 90.387c-.098 0-.198 0-.295.002.097-.002.197-.002.295-.002zm30.51-17.766c.853 0 1.411.684 1.24 1.519l-1.491 7.287-.243 1.19M360.4 90.37h-.062zm-3.77.012h-.219zm-1.15.003c-.122 0-.242 0-.361.002.12-.002.239-.002.361-.002zm-1.17.002h-.317zm2.1-.005l-.93.002.93-.002zm3.93-.012c-1.243.005-2.483.01-3.705.013 1.222-.002 2.464-.007 3.705-.013zm19.7-.12h.001a5037.459 5037.459 0 01-.001 0zm1.86-1.528l1.249-6.106-1.25 6.11v-.004zm-26.78 1.665h-.81zm-2.29.002h-1.096zm1.16-.002h-.864zm-224.63-26.97l2.385-10.574-2.727 12.087-2.617 12.312 2.294-10.793c.177-.835.477-2.2.665-3.032zm28.55-44.624h-16.864c-.853 0-1.704.681-1.895 1.511l-1.599 7.058-1.599 7.06c-.188.831.356 1.512 1.209 1.512h16.995c.852 0 1.699-.681 1.882-1.514l1.546-7.058 1.545-7.053v-.002c.182-.832-.366-1.514-1.22-1.514zm-3.67 23.479v-.002l-4.946 22.883 4.946-22.881zm-48.99 75.818s8.501.11 13.905.11c-4.105 0-10.885-.076-13.912-.112l.008.002zm28.88-75.821l-2.388 10.574 2.388-10.574z" fill="#fff"/><path d="M153.02 40.756h-16.997c-.852 0-1.704.681-1.892 1.514l-2.388 10.574-2.385 10.574c-.188.832-.488 2.197-.665 3.032l-2.294 10.793-2.292 10.793a32.521 32.521 0 01-.818 2.986s-3.175 9.448-8.514 9.34c-.227-.004-.448-.006-.666-.012l-4.62-.086h-.003c-.851-.012-1.707.652-1.906 1.48l-1.762 7.41-1.76 7.407c-.198.828.336 1.511 1.183 1.526 3.028.036 9.808.112 13.912.112 13.334 0 20.363-7.388 24.87-28.647l5.273-24.399 4.946-22.883c.18-.832-.371-1.514-1.223-1.514zm241.45 48.769c-.852 0-1.405-.684-1.226-1.519l12.786-59.89m6.21 59.888l5.17-25.562-5.17 25.562z" fill="#fff"/><path d="M393.43 88.766c-.104-.417-.043-1.44.138-2.275l6.068-28.428-6.393 29.944c-.18.835.374 1.518 1.226 1.518h1.553c-.854 0-2.49-.342-2.592-.76zm17.8.417c-.464.188-1.543.342-2.396.342h1.552c.853 0 1.69-.684 1.858-1.521l.308-1.519c-.17.835-.857 2.51-1.322 2.698zm3.6-13.96l2.283-11.282c-.001.007-.002.017-.004.022l-2.28 11.26zm50.45-43.095l.704 2.91c.194.833-.344 1.509-1.195 1.511M412.55 86.486l2.277-11.262-2.277 11.262zm52.03-57.339l.697 2.981-.697-2.981zm-47.47 34.795c.17-.835.45-2.188.627-3.015l2.438-11.421-2.761 12.937-.304 1.499zm-10.87-36.807c-.17.806-.387 1.824-.531 2.498l-6.068 28.43 6.393-29.946.206-.982z" fill="#fff"/><path d="M465.98 35.038l-.704-2.91-.697-2.981-.353-1.509c-1.38-5.364-5.434-8.46-14.233-8.46l-13.7-.014-12.617-.015h-14.197c-.852 0-1.696.681-1.871 1.516h-.001l-.628 2.967-.74 3.503-.207.982-6.393 29.946-6.068 28.428c-.18.835-.242 1.857-.138 2.275.103.417 1.739.76 2.592.76h12.808c.853 0 1.932-.155 2.396-.343.465-.188 1.152-1.862 1.322-2.697l2.277-11.262 2.279-11.26.004-.022.304-1.5 2.76-12.936 2.44-11.426c.18-.83 1.02-1.51 1.871-1.512l40.3-.02c.85-.001 1.39-.678 1.195-1.51z" fill="#fff"/><path d="M517.86 8.724c-.853.006-2.248.012-3.102.012H501.86c-.853 0-1.946.576-2.427 1.28L470.91 51.803c-.482.706-1.031.6-1.22-.23l-2.099-9.206c-.189-.832-1.043-1.511-1.896-1.511h-18.337c-.853 0-1.358.669-1.125 1.49l8.217 28.783c.234.82.251 2.168.04 2.994l-3.582 13.93c-.212.828.313 1.504 1.166 1.504h18.123c.852 0 1.724-.676 1.935-1.503l3.583-13.931c.211-.826.804-2.061 1.318-2.742l46.306-61.46c.514-.68.236-1.235-.616-1.228l-4.861.031zm-145.68 36.05l-.001-.017c-.107.925-.96 1.604-1.813 1.604h-23.248c-.803 0-1.212-.547-1.094-1.22.007-.02.01-.037.022-.054 0 0-.008.001-.014.006.005-.026.005-.05.012-.078l.107-.395c2.22-5.903 6.743-9.778 15.243-9.778 9.569 0 11.437 4.675 10.787 9.932zm-6.82-26.834c-29.841 0-36.912 18.113-40.88 36.394-3.966 18.633-3.625 36.055 27.254 36.055h1.096c.098-.002.198-.002.296-.002h1.991c.12-.002.24-.002.362-.002l.93-.002h.219c1.222-.002 2.462-.008 3.705-.012h.062c8.155-.032 16.334-.093 19.647-.12.847-.013 1.676-.696 1.85-1.524l1.25-6.11.243-1.19 1.492-7.287c.17-.835-.387-1.519-1.24-1.519h-27.761c-11.041 0-14.32-2.934-13.112-11.56h44.377l-.004.005c.011 0 .02-.005.03-.005.706-.012 1.358-.498 1.617-1.145.048-.124.09-.253.107-.388l-.005.005c6.59-24.854 4.7-41.592-23.528-41.592zM224.32 44.679l-.42 1.487v.005l-3.352 11.875-3.35 11.873c-.231.82-1.118 1.492-1.972 1.492H197.49c-13.453 0-16.729-10.523-13.453-26.043 3.275-15.874 9.697-25.742 22.938-26.74 18.094-1.365 21.714 11.361 17.345 26.051zm12.163 25.818s8.362-20.303 10.261-32.031C249.334 22.767 241.474 0 211.114 0c-30.187 0-43.295 21.737-48.297 45.367-5.001 23.801 1.552 44.675 31.567 44.504l23.679-.088 22.131-.08c.852-.008 1.724-.684 1.94-1.507l3.856-14.705c.215-.825-.306-1.504-1.159-1.509l-3.695-.022-3.693-.022c-.726-.005-1.14-.473-1.053-1.096.016-.112.042-.227.09-.347z" fill="#fff"/><path d="M385.92 56.908a1.018 1.018 0 01-2.036 0c0-.562.456-1.016 1.018-1.016.563 0 1.018.454 1.018 1.016z" fill="#fff"/><path d="M5.978 30.509c-8.335 11.98-7.297 27.566-.93 40.295.152.305.31.605.467.906.1.19.194.386.297.573.06.113.125.223.186.33.109.203.22.396.332.593.198.35.4.696.608 1.043.115.19.228.38.347.571.23.371.465.737.705 1.104.1.156.198.312.3.463.333.496.672.99 1.022 1.475.009.013.018.027.03.04.054.077.115.153.172.231a48.248 48.248 0 001.281 1.685 67.759 67.759 0 001.19 1.45c.391.461.79.92 1.198 1.37l.024.024c.017.02.032.031.047.05a60.166 60.166 0 001.609 1.678c.32.322.644.64.973.955.133.127.264.256.397.378.439.413.882.818 1.333 1.214l.021.017c.077.068.156.132.232.197.398.345.803.687 1.211 1.023.166.135.335.267.502.4.333.267.67.53 1.01.79l.539.41c.375.275.752.546 1.133.813.139.1.273.197.412.293.04.026.075.053.114.08.361.25.73.488 1.1.728.158.105.316.215.476.317.566.359 1.141.713 1.722 1.055l.476.268c.427.247.857.489 1.293.725.235.127.477.247.715.37.308.16.613.324.925.48.071.034.145.068.214.103.126.06.253.12.379.183.484.232.972.459 1.466.678l.31.14a52.48 52.48 0 002.126.874c.532.205 1.072.407 1.614.598l.203.07c.594.208 1.195.4 1.799.589.144.041.29.088.434.13.616.185 1.224.407 1.858.524 40.31 7.351 52.02-24.224 52.02-24.224-9.835 12.812-27.29 16.191-43.83 12.43-.626-.143-1.234-.338-1.845-.519a54.809 54.809 0 01-2.238-.718l-.244-.087a55.793 55.793 0 01-1.567-.581l-.44-.174a50.346 50.346 0 01-1.692-.703c-.115-.049-.224-.1-.338-.149a69.05 69.05 0 01-1.427-.664l-.412-.197c-.371-.181-.738-.374-1.104-.562-.245-.13-.494-.251-.737-.386a42.673 42.673 0 01-1.323-.742c-.148-.083-.298-.163-.447-.25a63.921 63.921 0 01-1.723-1.054c-.157-.1-.31-.207-.465-.31a50.095 50.095 0 01-1.226-.815c-.134-.091-.263-.188-.395-.278a45.892 45.892 0 01-1.673-1.226 77.213 77.213 0 01-1.512-1.192c-.44-.361-.875-.725-1.303-1.099l-.143-.12c-.464-.407-.92-.824-1.37-1.244a55.99 55.99 0 01-.385-.371 43.17 43.17 0 01-.984-.965c-.13-.13-.26-.256-.386-.386a51.82 51.82 0 01-1.207-1.276l-.06-.064a49.09 49.09 0 01-1.546-1.775 53.576 53.576 0 01-.881-1.089 27.092 27.092 0 01-.323-.403c-.347-.45-.686-.899-1.018-1.355-9.182-12.525-12.481-29.8-5.142-43.987" fill="#fff"/><path d="M31.852 20.416c-6.028 8.674-5.7 20.286-.999 29.46a38.378 38.378 0 002.666 4.45c.904 1.295 1.905 2.835 3.103 3.875a36.6 36.6 0 001.353 1.404c.117.12.237.234.356.352.45.437.909.866 1.382 1.284.02.014.037.034.056.049.005.005.01.007.014.012.523.46 1.064.901 1.614 1.336.122.092.242.19.366.285.55.423 1.112.838 1.688 1.233l.049.037c.254.176.512.34.77.508.123.08.24.166.365.241.411.264.828.52 1.251.767.06.036.119.068.177.102.365.21.735.418 1.106.618.13.073.261.137.393.205.257.134.513.271.774.4.04.02.08.037.117.054.531.261 1.067.513 1.614.752.117.052.238.098.357.147.437.185.879.366 1.323.537a64.456 64.456 0 001.781.63c.184.058.365.12.55.175.579.181 1.151.408 1.756.508 31.123 5.156 38.308-18.806 38.308-18.806-6.477 9.329-19.02 13.78-32.405 10.305a38.447 38.447 0 01-1.763-.51c-.178-.054-.353-.112-.53-.17a35.814 35.814 0 01-1.233-.426c-.186-.068-.373-.136-.556-.207a41.74 41.74 0 01-1.327-.535c-.12-.051-.24-.097-.358-.151a35.8 35.8 0 01-1.623-.755c-.275-.134-.545-.275-.815-.415l-.47-.241c-.346-.188-.69-.384-1.03-.581-.08-.047-.165-.09-.246-.14a40.52 40.52 0 01-1.248-.761c-.127-.08-.25-.169-.376-.252a46.186 46.186 0 01-.808-.534 43.295 43.295 0 01-1.682-1.23c-.127-.101-.254-.199-.379-.299-5.859-4.626-10.503-10.947-12.71-18.115-2.315-7.434-1.816-15.779 2.193-22.55" fill="#fff"/><path d="M53.613 12.875c-3.554 5.23-3.903 11.724-1.437 17.5 2.6 6.13 7.929 10.94 14.147 13.22.257.095.513.18.773.269.113.034.226.073.34.107.367.115.73.249 1.109.32 17.185 3.32 21.846-8.819 23.087-10.605-4.083 5.879-10.945 7.29-19.364 5.246a21.91 21.91 0 01-2.037-.629 24.899 24.899 0 01-2.42-1.005 25.021 25.021 0 01-4.24-2.588c-7.534-5.716-12.214-16.62-7.298-25.502M247.16 114.73l-4.954 11.282h-5.468l.448-10.251-4.026 10.251h-5.296l-.139-11.282.585-2.786h3.75l-.723 11.143 4.163-11.143h5.228l-.378 11.282 4.128-11.282h3.267l-.585 2.786zm8.63 3.34c.482-2.202.344-2.615-.791-2.615h-1.72l-1.101 5.161-1.686 5.398h-3.198l2.613-12.244.38-1.79h2.924l.378.826s1.686-.996 3.335-.996c3.51 0 3.235 2.646 2.477 6.26h-3.611zm10.39-7.88c-1.409 0-2.304-.413-1.96-2.131.378-1.722 1.48-2.134 2.854-2.134 1.378 0 2.305.412 1.927 2.134-.344 1.684-1.444 2.131-2.82 2.131zm-1.512 15.823H261.5l.62-5.503 1.101-5.09-2.2-.484.618-2.99h6.018l-2.99 14.067zm13.722-11.083l-3.955.483-1.137 5.367c-.31 1.48-.31 1.892.999 1.892h2.648l-.55 2.82s-2.407.722-3.44.722c-4.06 0-4.026-2.236-3.302-5.574l1.101-5.26-2.202-.482.653-2.993h2.306l1.308-3.545h3.13l-.758 3.545h3.852l-.653 3.025zm8.22.18c-1.857 0-2.821.964-3.198 2.683l5.296-.447c.24-1.17 0-2.236-2.098-2.236zm-3.713 5.227c-.243 1.721.411 2.305 2.612 2.305h5.537l-.55 2.615s-3.336.927-5.812.927c-6.158 0-6.227-3.471-5.435-7.187.791-3.648 2.201-7.256 8.15-7.256 5.747 0 6.022 3.472 4.611 8.596h-9.114zm21.733 5.673h-3.163l.62-5.503 2.235-10.457-2.203-.515.654-2.993h6.02l-4.163 19.468zm11.43-10.9c-1.86 0-2.821.964-3.2 2.683l5.297-.447c.24-1.17 0-2.236-2.097-2.236zm-3.716 5.227c-.24 1.721.414 2.305 2.614 2.305h5.538l-.55 2.615s-3.338.927-5.815.927c-6.157 0-6.224-3.471-5.433-7.187.792-3.648 2.202-7.256 8.152-7.256 5.744 0 6.02 3.472 4.61 8.596h-9.116zm23.626-5.057s-4.025.034-5.125.034c-2.34 0-2.58.72-2.751 1.477l-.14.689 7.431.552s.034 2.373-.276 3.713c-.446 2.236-2.751 4.504-6.912 4.504-2.066 0-5.402-.788-5.402-.788l.585-2.718h5.125c2.27 0 2.581-.62 2.72-1.237l.171-.894-7.293-.552s-.274-1.823.103-3.645c.552-2.478 2.82-4.609 6.982-4.609 2.065 0 5.4.754 5.4.754l-.618 2.72zm13.83 0s-4.023.034-5.125.034c-2.338 0-2.579.72-2.751 1.477l-.14.689 7.432.552s.035 2.373-.275 3.713c-.447 2.236-2.752 4.504-6.915 4.504-2.063 0-5.4-.788-5.4-.788l.585-2.718h5.125c2.27 0 2.58-.62 2.719-1.237l.17-.894-7.292-.552s-.274-1.823.103-3.645c.552-2.478 2.82-4.609 6.983-4.609 2.063 0 5.4.754 5.4.754l-.62 2.72zm4.33 12.97h-2.75l.102-2.065c-.998-.066-1.513-.789-1.273-1.995.379-1.719 1.445-2.131 2.855-2.131 1.376 0 2.303.412 1.927 2.131l-.861 4.06zm18.4-12.83c-2.063 0-2.784 1.238-3.267 3.508-.482 2.27-.344 3.611 1.72 3.611h2.854l1.584-7.119zm4.713 8.77l-.38 1.823-2.887-.034-.413-.893s-2.547 1.098-4.264 1.098c-4.405 0-4.61-3.61-3.82-7.256.791-3.716 2.511-7.224 6.88-7.224 1.583 0 3.715.791 3.715.791l1.754-5.95h3.165l-3.75 17.644zm11.387-8.91c-2.682 0-3.544 1.511-4.025 3.713-.446 2.237-.239 3.75 2.407 3.75 2.753 0 3.58-1.48 4.06-3.75.483-2.133.344-3.713-2.442-3.713zm-2.338 10.938c-5.676 0-6.124-3.542-5.367-7.224.792-3.68 2.787-7.188 8.463-7.188 5.64 0 6.157 3.509 5.364 7.188-.79 3.75-2.786 7.224-8.46 7.224zm32.198-.208l.62-5.435.309-1.547c.448-2.063.723-3.577-1.445-3.577h-1.685c.07 1.067-.138 2.27-.413 3.542l-1.478 7.017h-3.2l.62-5.435.308-1.547c.448-2.063.722-3.577-1.443-3.577h-1.377l-2.27 10.559h-3.682l2.994-14.067h2.889l.447.86s1.961-1.033 3.543-1.033c1.204 0 2.099.551 2.409 1.237.687-.378 2.649-1.237 4.06-1.237 4.4 0 4.264 3.576 3.472 7.224l-1.479 7.016h-3.2zm14.62-10.73c-2.684 0-3.544 1.511-4.025 3.713-.446 2.237-.239 3.75 2.408 3.75 2.751 0 3.579-1.48 4.06-3.75.48-2.133.343-3.713-2.443-3.713zm-2.339 10.938c-5.677 0-6.123-3.542-5.366-7.224.79-3.68 2.786-7.188 8.462-7.188 5.642 0 6.157 3.509 5.365 7.188-.79 3.75-2.786 7.224-8.46 7.224zm18.019-8.148c.481-2.202.344-2.615-.79-2.615h-1.721l-1.101 5.161-1.686 5.398h-3.198l2.613-12.244.38-1.79h2.924l.377.826s1.686-.996 3.338-.996c3.508 0 3.232 2.646 2.475 6.26h-3.611zm12.32-2.96c-1.855 0-2.82.964-3.197 2.683l5.294-.447c.243-1.17 0-2.236-2.097-2.236zm-3.715 5.227c-.239 1.721.413 2.305 2.614 2.305h5.538l-.55 2.615s-3.337.927-5.812.927c-6.157 0-6.226-3.471-5.437-7.187.792-3.648 2.203-7.256 8.153-7.256 5.743 0 6.02 3.472 4.61 8.596h-9.116zm12.205 5.883c-1.445 0-2.338-.413-1.96-2.097.343-1.724 1.41-2.134 2.856-2.134 1.34 0 2.268.41 1.926 2.134-.38 1.65-1.48 2.097-2.822 2.097z" fill="#fff"/></svg></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Skill