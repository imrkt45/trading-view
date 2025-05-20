// 'use client';


'use client';

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Image from 'next/image'; // Assuming next/image for optimization

const CustomCard = ({ title, subtitle, imageSrc }) => {
    return (
        <Card sx={{
            maxWidth: 400, // Remains a good constraint
            borderRadius: 3, // Or theme.shape.borderRadius * X if you want to tie to theme
            boxShadow: 4,
            p: { xs: 1.5, sm: 2 }, // Responsive padding for the card itself
            display: 'flex', // Added to ensure CardContent can grow if needed
            flexDirection: 'column', // Ensure card content stacks vertically
            height: '100%' // Makes all cards in a row take up the same height
        }}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1, // Allows content to expand, useful if cards have varying text length but need same height
                gap: 1.5 // Consistent gap between elements in CardContent
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}> {/* Centered items vertically and added gap */}
                    <Image
                        src={imageSrc}
                        alt={title || 'Card Image'} // Added fallback for alt text
                        width={50} // Fixed size is okay for icons
                        height={50}
                        // sizes='small' // 'sizes' prop is more for responsive art direction, not strictly needed for fixed size
                        style={{
                            borderRadius: '50%',
                            // marginLeft: '-10px' // Replaced with gap on parent Box for better control
                        }}
                    />
                    <Box> {/* Container for title to allow it to be distinct from subtitle flow */}
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="subtitle1" color="text.secondary" sx={{ flexGrow: 1 }}> {/* flexGrow allows subtitle to push footer elements down if card has fixed height and footer */}
                    {subtitle}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CustomCard;

// import React from 'react';
// import { Card, CardContent, Typography, Box } from '@mui/material';
// import Image from 'next/image';

// const CustomCard = ({ title, subtitle, imageSrc }) => {
//     return (
//         <Card sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 4, p: 2 }}>
//             <CardContent>
//                 <Box sx={{ display: 'flex', gap: 0.5,flexDirection:'column' }}>
//                     <Box display= 'flex'>
//                         <Image
//                         src={imageSrc}
//                         alt={title}
//                         width={50}
//                         height={50}
//                         sizes='small'
//                         style={{ borderRadius: '50%',marginLeft:'-10px'}}
//                     />
//                     <Box>
//                         <Typography variant="h5" component="div" sx={{marginTop:'10px'}}>
//                             {title}
//                         </Typography>
//                     </Box></Box>
//                     <Typography variant="subtitle1" color="text.secondary">
//                         {subtitle}
//                     </Typography>
//                 </Box>
//             </CardContent>
//         </Card>
//     );
// };

// export default CustomCard;
