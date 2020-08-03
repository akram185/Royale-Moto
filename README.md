# Project Overview

Royale Moto 

## Project Description

Royale Moto is an app which consists collection of the best motorcycles. User will be presented with cards containing image and the name of the motorcycles Royale Moto has. User can select the motorcycle they like and will be redirected to the individual motorcycle page when clicked on the card. Each individual motorcycle page will have information about the selected motorcycle and specifications. There will also be a "Add to favorites" button on each page which will let the user add their favorite motorcycle to the favorites list. The cool feature of this app is that the user is not limited to the collection Royale Moto has, user can add motorcycles of their choice from additional dropdown list which includes more motorcycles not included in Royale Moto's collection.

## Data Sample

(https://airtable.com/tblHhxL6KnP5ie5PC/viwqjI8MIMAF39TKd?blocks=hide)
```json
{
    "records": [
        {
            "id": "rec8UwZZ9Fq8RFcPu",
            "fields": {
                "Make": "Yamaha",
                "Model": "Yzf-R1",
                "Year": 2020,
                "Image Url": [
                    {
                        "id": "attCiKWhMYuMnI2BF",
                        "url": "https://dl.airtable.com/.attachments/88e2107f42a0ce24f98f6966adae8a24/847be064/2020_Yamaha_YZF-R1_and_YZF-R1M_First_Look_13_Fast_Facts",
                        "filename": "2020_Yamaha_YZF-R1_and_YZF-R1M_First_Look_(13_Fast_Facts)",
                        "size": 245442,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://dl.airtable.com/.attachmentThumbnails/a60a133db180f5335418fc239b70c012/85b3cfd8",
                                "width": 54,
                                "height": 36
                            },
                            "large": {
                                "url": "https://dl.airtable.com/.attachmentThumbnails/02e0fab4d495ae3105679ee8a52d83ad/34dff41b",
                                "width": 768,
                                "height": 512
                            },
                            "full": {
                                "url": "https://dl.airtable.com/.attachmentThumbnails/ccd93543ba53aad7d4aff783b2dd11eb/ff76732c",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Description": "The 998cc inline-four-cylinder engine features Yamaha’s exclusive crossplane crankshaft technology derived from the YZR-M1 MotoGP® machine. Every aspe...",
                "Specification": "Cutting-Edge CP4® Engine\nThe R1’s 998cc inline-four-cylinder engine features Yamaha’s exclusive crossplane crankshaft technology derived from the YZR-..."
            },
            "createdTime": "2020-08-03T15:11:34.000Z"
        },
        {
            "id": "recLFkBBIytWg2xLc",
            "fields": {},
            "createdTime": "2020-08-03T15:11:34.000Z"
        }
    ],
    "offset": "recLFkBBIytWg2xLc"
}
```


## Wireframes

https://wireframe.cc/nwSoPA

https://wireframe.cc/3tEoRh

https://wireframe.cc/jxRTUt

### MVP/PostMVP

#### MVP 

- Consume data from Airtable and render it on the Home page
- Allow user to add selected motorcyle to the favorites
- Make individual page for each motorcycle
- Include optios for user to add motorcycle to the Home page
- Have Home, Favorites, Motorcycle, App, Add Motorcycles, Delete Favorites components
- Page responsive design will support mobile, desktop and tablet layouts
- Use flexbox to display rendered data

#### PostMVP  

- Use bootstarp for styling
- Add animations and dark mode
- Create one more component to delete the motorcycles from Home page.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 01-02| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 03| Project Approval | Incomplete
|August 04| Core Application Structure (6 react components) | Incomplete
|August 05| Consume the data and render it on components| Incomplete
|August 06| MVP and Post MVP  | Incomplete
|August 07| Presentations | Incomplete

## Priority Matrix

https://github.com/akram185/Royale-Moto/blob/master/React_Priority_Matrix.png

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating Components  | H | 4hrs| 0hrs | 0hrs |
| Implementing CSS | H | 6hrs| 0hrs | 0hrs |
|Consuming data from airtable | H | 4hrs| 0hrs | 0hrs |
| Rendering data on each component | H | 6hrs| 0hrs | 0hrs |
| Styling data| H | 6hrs| 0hrs | 0hrs |
| Check components structure  | H | 3hrs| 0hrs | 0hrs |
| Overall project debugging  | H | 3hrs| 0hrs | 0hrs |
| CSS for Media Query  | M | 3hrs| 0hrs | 0hrs |
| Total | H | 33hrs| 0hrs | 0hrs |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
