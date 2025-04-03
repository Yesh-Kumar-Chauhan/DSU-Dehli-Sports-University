import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Button from '../components/bootstrap/Button';

function PDFGenerator({ filename, header, data }) {
    const generatePDF = () => {
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'pt',
            format: 'a4'
        });

        const pageWidth = pdf.internal.pageSize.width;
        const pageHeight = pdf.internal.pageSize.height;
        const margin = { top: 20, left: 20, right: 20, bottom: 20 };
        const contentWidth = pageWidth - margin.left - margin.right;
        const headingStyle = { align: 'center', fontSize: 14, font: 'bold' };

        // Add title to the PDF
        pdf.text(filename, pageWidth / 2, margin.top, headingStyle);
        const spaceAfterText = 30;

        // Adjust table style to handle long text wrapping
        const tableStyle = {
            cellPadding: 6, // Less padding to fit more content
            fontSize: 8, // Smaller font size
            overflow: 'linebreak', // Allow line breaks for long text
            columnWidth: 'auto', // Automatically adjust column width to fit content
            halign: 'center',
            valign: 'middle',
            fillColor: [255, 255, 255],
            textColor: [0, 0, 0]
        };

        const headStyles = {
            fontSize: 10,
            font: 'bold',
            fillColor: [0, 51, 102],
            textColor: [255, 255, 255],
            overflow: 'linebreak', // Ensure header text breaks into multiple lines if too long
        };

        // Add autoTable with multi-line text wrapping
        pdf.autoTable({
            head: [header],
            body: data.map(row => Object.values(row)),
            theme: 'grid',
            styles: tableStyle,
            headStyles: headStyles,
            startY: margin.top + spaceAfterText,
            margin: { left: margin.left, right: margin.right },
            pageBreak: 'auto',
            showHead: 'everyPage', // Ensure headers are shown on each page
            columnStyles: {
                // Optional: Set specific column width if necessary
                0: { cellWidth: 50 },
                1: { cellWidth: 100 },
                2: { cellWidth: 100 },
                3: { cellWidth: 100 },
                4: { cellWidth: 100 },
            },
            // Enable word wrapping on cells
            cellWidth: 'auto',
            columnStyles: {
                text: { 
                    columnWidth: 'wrap', 
                    halign: 'center',
                }
            }
        });

        pdf.save(filename);
    };

    return (
        <Button onClick={generatePDF} className='btn btn-success'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
            </svg>
        </Button>
    );
}

export default PDFGenerator;
