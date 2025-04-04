/* eslint-disable no-console */
import './app.css';
import React, {memo, useCallback, useEffect, useState} from 'react';
import Toggle from '@jetbrains/ring-ui-built/components/toggle/toggle';


interface Project {
  id: string;
  name: string;
}

const host = await YTApp.register();

const AppComponent: React.FunctionComponent = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [flag, setFlag] = useState<boolean>(false);

  const fetchProjects = useCallback(async (): Promise<void> => {
    try {
      const result = await host.fetchYouTrack<Project[]>('admin/projects', {
        query: {fields: 'id,name'}
      });
      console.log('Fetched projects:', result);
      setProjects(result);
    } catch(error) {
      console.error('Failed to fetch projects:', error);
    }
  }, []);

  const loadFlag = useCallback(async (): Promise<void> => {
    try {
      const result = await host.fetchApp<{ booleanSetting: boolean }>('backend/flag');
      setFlag(result.booleanSetting);
    } catch(error) {
      console.error('Failed to fetch projects:', error);
    }
  }, []);

  const saveFlag = useCallback(async (newFlag: boolean): Promise<void> => {
    try {
      await host.fetchApp('backend/flag', {
        method: 'POST',
        body: { booleanSetting: newFlag }
      });
      setFlag(newFlag);
    } catch(error) {
      console.error('Failed to fetch projects:', error);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
    loadFlag();
  }, [fetchProjects, loadFlag]);

  return (
    <div className="widget">
      <h3>Projects</h3>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
    )}
      <Toggle
        checked={flag}
        onChange={(e) => saveFlag(e.target.checked)}
      >
        Enable Feature
      </Toggle>
    </div>
  );
};

export const App = memo(AppComponent);
