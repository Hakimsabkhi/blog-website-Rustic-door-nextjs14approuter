// src/pages/BlogPage.tsx
import BlogListServer from '@/src/app/SuperAdmin/blogList/components/BlogList.server';
import BlogActions from '@/src/app/SuperAdmin/blogList/components/BlogActions.client';

const Page = async () => {
    return (
        <div>
            <BlogListServer />
            {/* Include BlogActions component where necessary */}
            {/* Note: If BlogActions needs blogId, ensure to pass it appropriately */}
        </div>
    );
};

export default Page;
