export async function getHouses(): Promise<any> {
    const res = await fetch('https://interviewtestserverman-a395f7e9e80c.herokuapp.com/houses/');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    } else {
        return res.json();
    }
    }



export async function getHouseByName(name: string): Promise<any> {
    const res = await fetch(`https://interviewtestserverman-a395f7e9e80c.herokuapp.com/houses/?name=${name}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export async function addHouse(house: any): Promise<any> {
    const res = await fetch('https://interviewtestserverman-a395f7e9e80c.herokuapp.com/houses/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(house)
    });
  
    if (!res.ok) {
      throw new Error('Failed to add house');
    } else {
      return res.json();
    }
  }