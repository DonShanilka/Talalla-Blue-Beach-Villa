import React from 'react'
import '../contact/contact.css'

function ContactPage() {
    return (
        <>
            <section>
                <div className='contact-page-main-div'>
                    <div>
                        <div>
                            <iframe src="" frameborder="0"></iframe>
                        </div>
                        <div className='form-div'>
                            <div className='form-div-2'>
                                <input className='input-1' type="text" />
                                <input className='input-2' type="text" />
                                <input className='input-3' type="text" />
                                <input className='input-4' type="text" />
                                <input className='input-5' type="text" />
                                <button className='submit-btn'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage