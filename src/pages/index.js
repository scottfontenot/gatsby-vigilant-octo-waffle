import React from 'react';
import Link from 'gatsby-link';


const IndexPage = ({data}) => (
  <div>
   
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
    {data.allMarkdownRemark.edges.map(({node}) =>{
      return <PostListing post={node} />
    })}
    
  </div>
);

const PostListing = () => <div>Helllo</div>
export default IndexPage

export const query = graphql`
query SiteMeta {
  site {
    siteMetadata {
      title
      desc
    }
  }
  
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
        }
        html
      }
    }
  }
}
`;

