import { Routes, Route } from 'react-router-dom';
import { Container } from '../components/layout';
import {
    Home,
    JoinUs,
    Leadership,
    Idea,
    Blog,
    Projects,
    Resources,
    Events,
    NotFound
} from '../components/views';
    
export const Navigation = () => (
    <Routes>
        <Route path='/' element={<Container />} >
            <Route index element={<Home />} />
            <Route path="join_us" element={<JoinUs />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="idea" element={<Idea />} />
            <Route path="blog" element={<Blog />} />
            <Route path="projects" element={<Projects />} />
            <Route path="events" element={<Events />} />
            <Route path="resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
);