import React from 'react'
import pdf from '../../Assets/pdfLogo.png'
import art1 from '../../Assets/Gamification.pdf'


function Article() {
  return (
    <div>
     
        <div className='flex flex-wrap gap-9  p-3 items-center justify-center h-screen w-screen '>
            <div className='flex  flex-col justify-center items-center gap-5  p-12 border-2 rounded-md'>
                <img className='h-28 w-28' src={pdf} alt="pdf" />
                <p className='font-semibold  text-xs'>Bite Mark Identification Using Neural Networks</p>
                <a href={art1} download >
                    <button className='w-28 bg-blue-500  text-white p-2 rounded-md'>Download</button></a>
            </div>

            <div className='flex  flex-col justify-center items-center gap-5  p-12 border-2 rounded-md'>
                <img className='h-28 w-28' src={pdf} alt="pdf" />
                <p className='font-semibold text-xs'>Bite Mark Analysis: Chasing the Bite!</p>
                <a href={art1} download >
                    <button className='w-28 bg-blue-500  text-white p-2 rounded-md'>Download</button></a>
            </div>
           
            <div className='flex  flex-col justify-center items-center gap-5  p-10 border-2 rounded-md'>
                <img className='h-28 w-28' src={pdf} alt="pdf" />
                <p className='font-semibold text-xs '>Deep Learning Model for Identifying Snake <br/>
Using Snake Bite Marks in Video Processing</p>
                <a href={art1} download >
                    <button className='w-28 bg-blue-500  text-white p-2 rounded-md'>Download</button></a>
            </div>
            <div className='flex  flex-col justify-center items-center gap-5  p-11 border-2 rounded-md'>
                <img className='h-28 w-28' src={pdf} alt="pdf" />
                <p className='font-semibold text-xs'>Hierarchical cloud architecture for identifying <br/>the bite of “Egyptian cobra” </p>
                <a href={art1} download >
                    <button className='w-28 bg-blue-500  text-white p-2 rounded-md'>Download</button></a>
            </div>
            <div className='flex  flex-col justify-center items-center gap-5  p-14 border-2 rounded-md'>
                <img className='h-28 w-28' src={pdf} alt="pdf" />
                <p className='font-semibold text-xs'>The individualisation of a dog bite mark: </p>
                <a href={art1} download >
                    <button className='w-28 bg-blue-500  text-white p-2 rounded-md'>Download</button></a>
            </div>
            <div className='flex  flex-col justify-center items-center gap-5  p-12 border-2 rounded-md'>
                <img className='h-28 w-28' src={pdf} alt="pdf" />
                <p className='font-semibold text-xs'>Feature Extraction Of Human Bite Mark Images <br/> Using ML And Deep Neural Network</p>
                <a href={art1} download >
                    <button className='w-28 bg-blue-500  text-white p-2 rounded-md'>Download</button></a>
            </div>
            <div className='flex  flex-col justify-center items-center gap-5  p-12 border-2 rounded-md'>
                <img className='h-28 w-28' src={pdf} alt="pdf" />
                <p className='font-semibold text-xs'>Bitemark Evidence in Forensic dentistry for Human Identification <br/> using deep learning technique</p>
                <a href={art1} download >
                    <button className='w-28 bg-blue-500  text-white p-2 rounded-md'>Download</button></a>
            </div>
          
        </div>
    </div>
  )
}

export default Article