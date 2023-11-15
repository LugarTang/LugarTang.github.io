import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { CVPKUIcon, CVUIUCIcon } from './CVIcon';
import Typography from '@mui/material/Typography';

interface IntervalInstanceProps {
    time: string;
    event: string;
    description: string;
    Icon: any;
}

const IntervalInstance: React.FC<IntervalInstanceProps> = ({ time, event, description, Icon }) => {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                {time}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{
                    backgroundColor: '#FFFFFF'
                }}>
                    <Icon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    {event}
                </Typography>
                <Typography>{description}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

export function EducationTimeline() {
    return (
        <Timeline position="alternate">
            <IntervalInstance time="Sept.2021 - Ongoing" event="Peking University" description="Bachelor, Information and Computational Science" Icon={CVPKUIcon} />
        </Timeline >
    );
}

export function ResearchTimeline(){
    return (
        <Timeline position="alternate">
            <IntervalInstance time="Jun.2023 - Ongoing" event="University of Illinois Urbana-Champaign" description="Research Intern, Mentored by Jiaxuan You" Icon={CVUIUCIcon} /> 
        </Timeline>
    )
}

{/*
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Sleep
                    </Typography>
                    <Typography>Because you need rest</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary">
                        <RepeatIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Repeat
                    </Typography>
                    <Typography>Because this is the life you love!</Typography>
                </TimelineContent>
            </TimelineItem>
*/}