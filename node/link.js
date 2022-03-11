import axios from "axios";
const req = async() => {
    const res = await axios.get('https://www.poemist.com/api/v1/randompoems')
    const promises = res.data.map(async(po) => {
        const res = await axios.get(po.url);
        const totalRead = parseInt(res.data.split('Total read')[0].split('</i>').pop());
        return {
            title: po.title,
            totalRead: totalRead,
        }
    });
    const po = await Promise.all(promises);
    console.log(po);
    const top = po.sort((p1, p2) => p2.totalRead - p1.totalRead)[0];
    console.log(top);
}
req();