"use client";
import { PipelineTrack } from "@/types/pipeline";

const SingleTrack = ({ track }: { track: PipelineTrack }) => {
    const { name, description, stages, projects, icon } = track;

    return (
        <div className="ui-btc-card">
            <div className="ui-btc-card__inner">
                <div className="ui-btc-card__top">
                    <div className="ui-btc-card__icon">
                        {icon}
                    </div>
                    <div className="ui-btc-card__titles">
                        <span className="ui-btc-card__pair">{name}</span>
                        <span className="ui-btc-card__sub">{description}</span>
                    </div>
                </div>

                <div className="ui-btc-card__mid">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>Project</th>
                                {stages.map((stage, index) => (
                                    <th key={index} className="text-center">
                                        {stage}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project, idx) => (
                                <tr key={idx}>
                                    <td className="font-medium">{project.name}</td>
                                    {stages.map((_, stageIdx) => (
                                        <td key={stageIdx} className="text-center">
                                            <div className={`ui-btc-card__dot ${
                                                stageIdx < project.currentStage ? 'active' : ''
                                            }`}></div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <style jsx>{`
                .ui-btc-card {
                    --bg0: #060607;
                    --bg1: #0b0b10;
                    --text: rgba(255, 255, 255, 0.88);
                    --muted: rgba(255, 255, 255, 0.46);
                    --accent: #f7931a;
                    
                    appearance: none;
                    position: relative;
                    display: block;
                    width: 100%;
                    max-width: 100%;
                    border: 0;
                    padding: 1.5rem;
                    border-radius: 1.25rem;
                    background: var(--bg1);
                    cursor: pointer;
                    text-align: left;
                    outline: none;
                    transition: all 0.3s ease;
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
                }

                .ui-btc-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                }

                .ui-btc-card__inner {
                    position: relative;
                    z-index: 1;
                }

                .ui-btc-card__top {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }

                .ui-btc-card__icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 3rem;
                    height: 3rem;
                    border-radius: 1rem;
                    background: linear-gradient(135deg, rgba(255, 215, 170, 0.1) 0%, rgba(255, 215, 170, 0.05) 100%);
                    border: 1px solid rgba(255, 215, 170, 0.1);
                    color: #ffd7aa;
                    font-size: 1.5rem;
                    transition: all 0.3s ease;
                }

                .ui-btc-card:hover .ui-btc-card__icon {
                    transform: scale(1.05);
                    box-shadow: 0 0 20px rgba(255, 215, 170, 0.2);
                }

                .ui-btc-card__titles {
                    flex: 1;
                    min-width: 0;
                }

                .ui-btc-card__pair {
                    display: block;
                    font-family: monospace;
                    font-weight: 800;
                    font-size: 0.875rem;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: rgba(255, 215, 170, 0.9);
                    margin-bottom: 0.25rem;
                }

                .ui-btc-card__sub {
                    display: block;
                    font-family: monospace;
                    font-size: 0.75rem;
                    color: var(--muted);
                    letter-spacing: 0.05em;
                }

                .ui-btc-card__mid {
                    width: 100%;
                    overflow-x: auto;
                }

                .ui-btc-card__mid table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .ui-btc-card__mid th {
                    padding: 0.5rem 0.5rem 1rem;
                    font-size: 0.75rem;
                    font-weight: 500;
                    color: var(--muted);
                    text-align: left;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    white-space: nowrap;
                }

                .ui-btc-card__mid th:first-child {
                    padding-left: 0;
                }

                .ui-btc-card__mid th:last-child {
                    padding-right: 0;
                }

                .ui-btc-card__mid td {
                    padding: 0.75rem 0.5rem;
                    font-size: 0.875rem;
                    color: var(--text);
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    white-space: nowrap;
                }

                .ui-btc-card__mid td:first-child {
                    padding-left: 0;
                }

                .ui-btc-card__mid td:last-child {
                    padding-right: 0;
                }

                .ui-btc-card__dot {
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }

                .ui-btc-card__dot.active {
                    background-color: #ffd7aa;
                    box-shadow: 0 0 10px rgba(255, 215, 170, 0.5);
                    transform: scale(1.2);
                }
            `}</style>
        </div>
    );
};

export default SingleTrack;
