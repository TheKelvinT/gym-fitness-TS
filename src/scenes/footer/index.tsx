import Logo from '@/assets/Logo.png'


const Footer = () => {
  return (
    <footer className=" bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className='mt-15 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className='my-5'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                <p> @ Evogym All Rights Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links and Resources</h4>
                <p className='my-5'>Contact Us</p>
                <p className='my-5'>Our Classes</p>
                <p>Ullamcorper vivamus</p>
            </div> 
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Empire City Damansara</p>
                <p className='my-5'>Petaling Jaya</p>
                <p>+(60) 16 9130 570</p>
            </div> 
        </div>
    </footer>
  )
}

export default Footer