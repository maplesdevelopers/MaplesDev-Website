import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '../components/layout';
import { 
    JoinUs,
    Leadership,
    Idea,
    Blog,
    Projects,
    NotFound,
    Home
} from '../components/views';
    
export const Navigation = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Container />  }>
                <Route index element={<Home />} />
                <Route path="joinus" element={<JoinUs />} />
                <Route path="leadership" element={<Leadership />} />
                <Route path="idea" element={<Idea />} />
                <Route path="blog" element={<Blog />} />
                <Route path="projects" element={<Projects />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
   );
