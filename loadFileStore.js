// const initialState = { 
    
//     content: `<title>Kai Kleinbard's Slanted Portfolio</title>
// Hello, I'm Kai Kleinbard, a software developer, AI specialist, and educator...

// Please remake this site into you own! Just upload your own text file. Links should be placed in <a> tags and the title should be in a <title>. Otherwise everything will show and preserve line breaks.

// I'm a computer and data scientist who loves to use deep learning and large language models to make things that are easy to use and friendly. I started Somatikai, a place where I explore how AI and body awareness work together. I also run bodyLITERATE, an organization that helps people who learn differently. And I created The Institute for Playful Beings and PlayLab, where I play with different ways of being and learning. I have a Masters Degree from UPenn, where I studied how to make digital tools more accessible for neuro-diverse learners. At Penn I assisted in research and teaching graduate algorithms and computational mathematics. I love math! When I'm not coding or designing algoirthms, I work with families at conflict with schools, supporting neurodivergent learners to obtain the supports they need. I learned Motivational Interviewing, a kind of therapy, from William R Miller, who invented it.  Besides all that, I'm still a dancer and a martial artist at heart.


// Projects and Current Research 
// I am curious about how we can somatize
// the digital experience, which involves bridging the gap
// between the physical and virtual worlds to create
// a more immersive and embodied interaction with technology.
// In this context, embodied means grounding the digital
// experience in bodily sensations and physical presence, allowing
// users to engage with technology in a more
// natural and intuitive way. 
 
// I hope to use artificial intelligence to create
// more accessible and equitable education experiences for neurodivergent
// students. My goal is to make AI a
// part of education that helps all students, especially
// those who learn differently, feel included and supported.
// I hope that by using AI in education,
// we can bring people together and create a
// kinder digital world where everyone can learn and
// grow. Beyond this, I also believe we need
// to create systems that are accountable to privacy
// needs and fully transparent. 

// Visit my artist site at <a href="https://web.archive.org/web/20170317170722/http://bodyliterate.org/kai-kleinbard-2/">Kai Kleinbard Artist Site</a>.

// Check out mindfulness projects:
// - Mountain: <a href="https://vercel.com/cre8ture/csb-7blsc9">Mountain Project</a>
// - Visualizing Mindfulness: <a href="https://visualizing-mindfulness.vercel.app/">Visualizing Mindfulness</a>



// Creative coding:
// - The Captain's Orders: <a href="https://earthling1111.itch.io/captainsorders">The Captain's Orders Game</a>`


// }

// // Reducer function
// function textReducer(state = { content: '' }, action) {
//     switch (action.type) {
//         case 'SET_TEXT':
//             return { ...state, content: action.payload };
//         default:
//             return state;
//     }
// }

// // Create Redux store
// const store = Redux.createStore(textReducer);

// // Event listener for text submission
// document.getElementById('submit-text').addEventListener('click', () => {
//     const text = document.getElementById('text-input').value;
//     store.dispatch({ type: 'SET_TEXT', payload: text });
// });

// // Custom button to trigger file input
// document.getElementById('custom-file-button').addEventListener('click', () => {
//     document.getElementById('file-input').click();
// });

// // File input change event
// document.getElementById('file-input').addEventListener('change', () => {
//     const fileInput = document.getElementById('file-input');
//     if (fileInput.files.length === 0) {
//         return;
//     }
//     const reader = new FileReader();
//     reader.onload = function(event) {
//         store.dispatch({ type: 'SET_TEXT', payload: event.target.result });
//     };
//     reader.readAsText(fileInput.files[0]);
// });

// // Function to format text as HTML
// function formatAsHTML(text) {
//     // Replace line breaks with <p> tags
//     let formatted = text.split('\n').map(line => `<p>${line}</p>`).join('');

//     // Convert <title> tags to <h1>
//     formatted = formatted.replace(/<title>(.*?)<\/title>/g, '<h1>$1</h1>');

//     // Convert links
//     formatted = formatted.replace(/<a>(.*?)<\/a>/g, (match, url) => {
//         return `<a href="${url}">${url}</a>`;
//     });

//     return formatted;
// }



// // Render function
// // Render function
// function render() {
//     const state = store.getState();
//     const formattedContent = formatAsHTML(state.content);
//     const outputElement = document.getElementById('formatted-output');
//     outputElement.innerHTML = formattedContent;
//     if (formattedContent !== '') {
//         outputElement.style.visibility = 'visible';
//         outputElement.style.opacity = '1';
//     }
// }
// // Subscribe render function to store
// store.subscribe(render);


// Initial state with your content
const initialState = {
    content: `<title>Kai Kleinbard's Slanted Portfolio</title>
Hello, I'm Kai Kleinbard, a software developer, AI specialist, and educator...
I Somatikai to explore how AI and body awareness can work together. He also runs <a href="https://www.thebodyliterate.com/">bodyLITERATE</a>, an organization that helps people who learn differently. Additionally, he created The Institute for Playful Beings and PlayLab to play with different ways of being and learning. Kai has a Masters Degree from UPenn, where he studied making digital tools more accessible for neurodiverse learners. At Penn, he assisted in research and teaching graduate algorithms and computational mathematics.

In the projects section, Kai shares some of his work spanning education technology, mindfulness apps, deep learning implementations, large language model experiments, cloud computing, performance art and creative coding. Some highlights include <a href="https://www.thebodyliterate.com/">bodyLITERATE</a> for executive function coaching, <a href="https://aquamarine-sorbet-3ee281.netlify.app/">Mosaic Essay</a> to visualize essay organization, <a href="https://scholar-8zcz.vercel.app/">PDF Summarizer</a> to automatically summarize documents, <a href="https://main.d2fwq3nd7k27zn.amplifyapp.com/">StudyDuck</a> to turn textbooks into study guides, <a href="https://transcriber-ten.vercel.app/">Transcribe Lectures</a> to transcribe audio into text, <a href="https://app-check.vercel.app/">College App Helper</a> to let AI analyze admissions essays, <a href="https://csb-7blsc9.vercel.app/">Mountain</a> to visualize worries dissipating, and <a href="https://cre8ture.github.io/sunWaves/">Sun Waves</a> a relaxing visual track. His creative work includes performances like <a href="https://www.youtube.com/watch?v=f1UOvrAfUaQ&amp;t=39s">Creature in the City</a> and projects like <a href="https://cre8ture.github.io/textWaves/">Text into Waves</a> that turn text into sound waves.

Kai has also created a variety of AI and machine learning projects, including fine tuning <a href="https://github.com/cre8ture/GPT2_fine_tuning">GPT-2 for lyrics generation</a>, building a <a href="https://github.com/cre8ture/CNN_flood_deep_learning.git">convolutional network for flood prediction</a>, creating <a href="https://github.com/cre8ture/VIT_transformer">VIT transformers for image recognition</a>, and experimenting with <a href="https://github.com/cre8ture/stable_diffusion_experiments">Stable Diffusion</a> for generative art. He has built conversational agents like an <a href="https://streaming-chat-gamma.vercel.app/">AI life coach</a> and a <a href="https://talk-to-pdf-alpha.vercel.app/">PDF chatbot</a>.

For creative coding, Kai has projects including a <a href="https://cre8ture.github.io/wave-breathing/">mindful breathing visualization</a>, a <a href="https://kak2594.wixsite.com/vertigo">space arcade game</a>, and a <a href="https://earthling1111.itch.io/captainsorders">text adventure game</a>. He also created a <a href="https://drive.google.com/file/d/11L8JMoiMj0ARg_u6SyLzST2WAxO-NoCv/view?usp=sharing">presentation on AWS Lambda serverless functions</a>.

Overall, the website showcases Kai's diverse background across computer science, education, AI, performance art and creative coding through his bio and extensive project links. The different sections provide an overview of his skills and interests in technology, arts and working with neurodiverse learners. The multitude of links allow readers to deeply explore Kai's specific projects in more detail.`
};

// Reducer function
function textReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TEXT':
            return { ...state, content: action.payload };
        default:
            return state;
    }
}

// Create Redux store
const store = Redux.createStore(textReducer);

// Function to format text as HTML
function formatAsHTML(text) {
    let formatted = text.split('\n').map(line => `<p>${line}</p>`).join('');

    formatted = formatted.replace(/<title>(.*?)<\/title>/g, '<h2 class="header">$1</h2>');
    formatted = formatted.replace(/<a href="(.*?)">(.*?)<\/a>/g, (match, url, text) => `<a href="${url}">${text}</a>`);

    return formatted;
}

// Render function
// function render() {
//     const state = store.getState();
//     const formattedContent = formatAsHTML(state.content);
//     document.getElementById('formatted-output').innerHTML = formattedContent;
// }
function render() {
    const state = store.getState();
    const formattedContent = formatAsHTML(state.content);
    const outputElement = document.getElementById('formatted-output');
    outputElement.innerHTML = formattedContent;
    if (formattedContent !== '') {
        outputElement.style.visibility = 'visible';
        outputElement.style.opacity = '1';
    }
}
// Initial render and subscribe to store updates
render();
store.subscribe(render);

// Event listener for text submission
document.getElementById('submit-text').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    store.dispatch({ type: 'SET_TEXT', payload: text });
});

// Custom button to trigger file input
document.getElementById('custom-file-button').addEventListener('click', () => {
    document.getElementById('file-input').click();
});

// File input change event
document.getElementById('file-input').addEventListener('change', () => {
    const fileInput = document.getElementById('file-input');
    if (fileInput.files.length === 0) {
        return;
    }
    const reader = new FileReader();
    reader.onload = function(event) {
        store.dispatch({ type: 'SET_TEXT', payload: event.target.result });
    };
    reader.readAsText(fileInput.files[0]);
});
