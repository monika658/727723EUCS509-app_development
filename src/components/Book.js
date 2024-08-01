import React, { useEffect, useState, useContext } from 'react';
import Slider from 'react-slick';
import './Book.css';
import { AuthContext } from '../AuthContext';
import PDFModal from './PDFModal';
import axios from 'axios';

const Books = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const [storyBooks, setStoryBooks] = useState([]);
    const [mustTryBooks, setMustTryBooks] = useState([]);
    const [fairyTaleBooks, setFairyTaleBooks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPdfUrl, setSelectedPdfUrl] = useState('');

    useEffect(() => {
        fetchStoryBooks();
        fetchMustTryBooks();
        fetchFairyTaleBooks();
    }, []);

    const fetchStoryBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5001/storyBooks');
            setStoryBooks(response.data);
        } catch (error) {
            console.error('Error fetching story books:', error);
        }
    };

    const fetchMustTryBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5001/mustTryBooks');
            setMustTryBooks(response.data);
        } catch (error) {
            console.error('Error fetching must-try books:', error);
        }
    };

    const fetchFairyTaleBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5001/fairyTaleBooks');
            setFairyTaleBooks(response.data);
        } catch (error) {
            console.error('Error fetching fairy-tale books:', error);
        }
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const openModal = (pdfUrl) => {
        if (isAuthenticated) {
            setSelectedPdfUrl(pdfUrl);
            setIsModalOpen(true);
        } else {
            alert('Please login to view the book.');
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPdfUrl('');
    };

    return (
        <div className="books-page">
            <div id="story-book" className="books-section">
                <h3>Story Book</h3>
                <Slider {...settings}>
                    {storyBooks.map((book, index) => (
                        <div className="book" key={index} onClick={() => openModal(book.pdfUrl)}>
                            <img src={book.imgSrc} alt={book.title} />
                            <p>{book.title}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            <div id="must-try-books" className="must-try-books-section">
                <h3>Must Try Books</h3>
                <Slider {...settings}>
                    {mustTryBooks.map((book, index) => (
                        <div className="book" key={index} onClick={() => openModal(book.pdfUrl)}>
                            <img src={book.imgSrc} alt={book.title} />
                            <p>{book.title}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            <div id="fairy-tale-books" className="fairy-tale-books-section">
                <h3>Fairy Tale Books</h3>
                <Slider {...settings}>
                    {fairyTaleBooks.map((book, index) => (
                        <div className="book" key={index} onClick={() => openModal(book.pdfUrl)}>
                            <img src={book.imgSrc} alt={book.title} />
                            <p>{book.title}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            <PDFModal isOpen={isModalOpen} onRequestClose={closeModal} pdfUrl={selectedPdfUrl} />
        </div>
    );
};

export default Books;
