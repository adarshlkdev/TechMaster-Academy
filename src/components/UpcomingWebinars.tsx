'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Introduction to Python',
      description:
        'Dive deep into the fundamentals of Python programming and enhance your coding skills.',
      slug: 'introduction-to-python',
      isFeatured: true,
    },
    {
      title: 'Web Development with HTML & CSS',
      description:
        'Learn the craft of web development from experienced developers and designers.',
      slug: 'web-development-html-css',
      isFeatured: true,
    },
    {
      title: 'Advanced JavaScript Techniques',
      description:
        'Advanced techniques to master JavaScript and build dynamic web applications.',
      slug: 'advanced-javascript-techniques',
      isFeatured: true,
    },
    {
      title: 'Machine Learning Fundamentals',
      description:
        'Get started with machine learning with this comprehensive overview.',
      slug: 'machine-learning-fundamentals',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'DevOps Essentials',
      description:
        'Enhance your DevOps skills with expert tips and strategies.',
      slug: 'devops-essentials',
      isFeatured: true,
    },
    {
      title: 'Cybersecurity Fundamentals',
      description:
        'Learn how to protect systems and data effectively in the digital age.',
      slug: 'cybersecurity-fundamentals',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Technical Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className=" text-center">
            <Button
             className="bg-black">
              <Link href={"/courses"}
              className="px-4 py-2 rounded-md text-white transition duration-200"
              >
               Explore now
            </Link>
          </Button>
            
        </div>      
      </div>
    </div>
  )
}

export default UpcomingWebinars